import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AssetsService } from '../services/assets.service';
import { Assets } from '../models/assets';
import { ActivatedRoute, Router } from '@angular/router';




@Component({
  selector: 'app-add-assets',
  templateUrl: './add-assets.component.html',
  styleUrls: ['./add-assets.component.scss']
})
export class AddAssetsComponent implements OnInit {

  assetsForm: FormGroup;
  model: Assets;
  title: string;
  assetsId: number;

  constructor(
    private fb: FormBuilder,
    private assetsService: AssetsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.title = "Create assets";
    this.createForm();

    // edit product
    this.assetsId = +this.route.snapshot.paramMap.get('id');
    if(this.assetsId) {
      this.getAsset();
    }
  }

  get f() { return this.assetsForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/assets');
  }

  createForm() {
    this.assetsForm = this.fb.group({
      serialnumber: ['', Validators.required],
      atype: ['', Validators.required],
      anotes: ['', Validators.required],
    })
  }

  onSubmit() {
    this.model = this.assetsForm.value;
    if (this.assetsId) {
      this.updateAssets();
    } else {
      this.addAssets();
    }
  }

  addAssets() {
    this.model = this.assetsForm.value;
    this.assetsService.addAssets(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/assets');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateAssets() {
    this.model = this.assetsForm.value;
    this.model.id = this.assetsId;
    this.assetsService.updateAssets(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/assets');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getAsset() {
    this.assetsService.getAsset(this.assetsId).subscribe(
      result => {
        console.log(result);
        this.assetsForm.patchValue(result.data)
      }
    )
  }
}
