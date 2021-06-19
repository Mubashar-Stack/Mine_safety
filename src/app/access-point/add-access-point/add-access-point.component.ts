import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { accessPointService } from '../services/access-point.service';
import { accessPoint } from '../models/access-point';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-add-access-point',
  templateUrl: './add-access-point.component.html',
  styleUrls: ['./add-access-point.component.scss']
})
export class AddAccessPointComponent implements OnInit {

  accessPointForm: FormGroup;
  model: accessPoint;
  title: string;
  accessPointId: number;
  
  types = [
    { id: 1, name: "IP_NonIS" }
    
  ];

  appes = [
    { id: 1, name: "All" }
    
  ];

  inMines = [
    { id: 1, name: "yes" },
    {id:  2, name: "no"}
    
  ];
  
  constructor(
    private fb: FormBuilder,
    private accessPointService: accessPointService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.title = "Create Access Point";
    this.accessPointForm = this.fb.group({
      name: ['', Validators.required],
      type: ['', Validators.required],
      app: ['', Validators.required],
      parent: ['', Validators.required],
      ipAddress: ['', Validators.required],
      port: ['', Validators.required],
      deviceID: ['', Validators.required],
      inMine: ['', Validators.required]
      
    });

    // edit product
    this.accessPointId = +this.route.snapshot.paramMap.get('id');
    if(this.accessPointId) {
      this.getaccessPoint();
    }
  }

  get f() { return this.accessPointForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/access-point');
  }

  

  onSubmit() {
    this.model = this.accessPointForm.value;
    if (this.accessPointId) {
      this.updateaccessPoint();
    } else {
      console.log(this.accessPointForm.value);
      this.addaccessPoint();
    }
  }

  addaccessPoint() {
    this.model = this.accessPointForm.value;
    this.accessPointService.addaccessPoint(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/access-point');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateaccessPoint() {
    this.model = this.accessPointForm.value;
    this.model.id = this.accessPointId;
    this.accessPointService.updateaccessPoint(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/access-point');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getaccessPoint() {
    this.accessPointService.getaccessPoint(this.accessPointId).subscribe(
      result => {
        console.log(result);
        this.accessPointForm.patchValue(result.data)
      }
    )
  }

}
