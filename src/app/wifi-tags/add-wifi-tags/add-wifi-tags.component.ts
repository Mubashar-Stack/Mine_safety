import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { wifitagsService } from '../services/wifi-tags.service';
import { wifiTags } from '../models/wifi-tags';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-wifi-tags',
  templateUrl: './add-wifi-tags.component.html',
  styleUrls: ['./add-wifi-tags.component.scss']
})
export class AddWifiTagsComponent implements OnInit {

  wifiTagsForm: FormGroup;
  model: wifiTags;
  title: string;
  wifiTagsId: number;

  tag_types = [
    { id: 1, name: "IP tag" }
    
  ];

  constructor(private fb: FormBuilder,
    private accessPointService: wifitagsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.title = "Create Access Point";
    this.wifiTagsForm = this.fb.group({
      name: ['', Validators.required],
      tag_mac: ['', Validators.required],
      tag_type: ['', Validators.required]
      
    });

  // edit product
  this.wifiTagsId = +this.route.snapshot.paramMap.get('id');
  if(this.wifiTagsId) {
    this.getwifiTags();
  }

  }

  get f() { return this.wifiTagsForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/access-point');
  }

  

  onSubmit() {
    this.model = this.wifiTagsForm.value;
    if (this.wifiTagsId) {
      this.updatewifiTags();
    } else {
      console.log(this.wifiTagsForm.value);
      this.addwifiTags();
    }
  }

  addwifiTags() {
    this.model = this.wifiTagsForm.value;
    this.accessPointService.addwifiTags(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/wifi-tags');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updatewifiTags() {
    this.model = this.wifiTagsForm.value;
    this.model.id = this.wifiTagsId;
    this.accessPointService.updatewifiTags(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/wifi-tags');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getwifiTags() {
    this.accessPointService.getwifiTags(this.wifiTagsId).subscribe(
      result => {
        console.log(result);
        this.wifiTagsForm.patchValue(result.data)
      }
    )
  }


}
