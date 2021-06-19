import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../employees/services/employee.service';
import { Employee } from '../../employees/models/employee';
import { wifitagsService } from '../../wifi-tags/services/wifi-tags.service';
import { wifiTags } from '../../wifi-tags/models/wifi-tags';
import { deviceAssociation } from '../models/device-association';
import {DeviceAssociationService} from '../services/device-association.service'
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-device-association',
  templateUrl: './add-device-association.component.html',
  styleUrls: ['./add-device-association.component.scss']
})
export class AddDeviceAssociationComponent implements OnInit {

  title: string;
  wifi_tags: wifiTags[] = [];
  employees: Employee[] = [];
  rows: deviceAssociation[] = [];
  deviceAssociationForm: FormGroup;
  model: deviceAssociation;
  deviceAssociationId: number;
  selectedTag:number;
  selectedEmp:number;

  constructor(
    private wifitagsService: wifitagsService,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private DeviceAssociationService: DeviceAssociationService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.title = "Create Device Association";
    this.createForm();
    this.getwifiTagss();
    this.getEmployees();

    // edit product
    this.deviceAssociationId = +this.route.snapshot.paramMap.get('id');
    if(this.deviceAssociationId) {
      this.getdeviceAssociation();
    }
  }

  get f() { return this.deviceAssociationForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/device-association');
  }

  createForm() {
    this.deviceAssociationForm = this.fb.group({
      wifi_tags_id: ['', Validators.required],
      employees_id: ['', Validators.required],
      
    })
  }

  onSubmit() {
    this.model = this.deviceAssociationForm.value;
    if (this.deviceAssociationId) {
      this.updatedeviceAssociation();
    } else {
      this.adddeviceAssociation();
    }
  }

  adddeviceAssociation() {
    this.model = this.deviceAssociationForm.value;
    this.DeviceAssociationService.adddeviceAssociation(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/device-association');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updatedeviceAssociation() {
    this.model = this.deviceAssociationForm.value;
    this.model.id = this.deviceAssociationId;
    this.DeviceAssociationService.updatedeviceAssociation(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/device-association');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getdeviceAssociation() {
    this.DeviceAssociationService.getdeviceAssociation(this.deviceAssociationId).subscribe(
      result => {
        console.log(result);
        this.deviceAssociationForm.patchValue(result.data)
      }
    )
  }








  getEmployees() {
    this.employeeService.getEmployees().subscribe(
      result => {
        this.employees = result;
        
      }
    )
  }

  getwifiTagss() {
    this.wifitagsService.getwifiTagss().subscribe(
      result => {
        this.wifi_tags = result;
        
      }
    )
  }



}
 