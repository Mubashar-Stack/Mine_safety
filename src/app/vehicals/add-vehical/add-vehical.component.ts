import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { VehicalService } from '../services/vehical.service';
import { Vehical } from '../models/vehical';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-add-vehical',
  templateUrl: './add-vehical.component.html',
  styleUrls: ['./add-vehical.component.scss']
})
export class AddVehicalComponent implements OnInit {

  vehicalForm: FormGroup;
  model: Vehical;
  title: string;
  vehicalId: number;

  constructor(
    private fb: FormBuilder,
    private vehicalService: VehicalService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Create Vehical";
    this.createForm();

    // edit product
    this.vehicalId = +this.route.snapshot.paramMap.get('id');
    if(this.vehicalId) {
      this.getVehical();
    }
  }

  get f() { return this.vehicalForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/vehicals');
  }

  createForm() {
    this.vehicalForm = this.fb.group({
      serialnumber: ['', Validators.required],
      vtype: ['', Validators.required],
      vnotes: ['', Validators.required],
    })
  }

  onSubmit() {
    this.model = this.vehicalForm.value;
    if (this.vehicalId) {
      this.updateVehical();
    } else {
      this.addVehical();
    }
  }

  addVehical() {
    this.model = this.vehicalForm.value;
    this.vehicalService.addVehical(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/vehicals');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateVehical() {
    this.model = this.vehicalForm.value;
    this.model.id = this.vehicalId;
    this.vehicalService.updateVehical(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/vehicals');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getVehical() {
    this.vehicalService.getVehical(this.vehicalId).subscribe(
      result => {
        console.log(result);
        this.vehicalForm.patchValue(result.data)
      }
    )
  }
}
