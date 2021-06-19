import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { EmployeeService } from '../../employees/services/employee.service';
import { Employee } from '../../employees/models/employee';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  employeeForm: FormGroup;
  model: Employee;
  title: string;
  employeeId: number;
  user: Employee;
  constructor(private fb: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.title = "Employee Profile";
    this.createForm();

    // edit product
    this.employeeId = +this.route.snapshot.paramMap.get('id');
    if(this.employeeId) {
      this.getEmployee();
    }
  }

  get f() { return this.employeeForm.controls; }

  goBack() {
    this.router.navigateByUrl('/backend/employees');
  }

  createForm() {
    this.employeeForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      identityCard: ['', Validators.required],
      bloodType: ['', Validators.required],
      Qualifications: ['', Validators.required],
      FirstAidLevel: ['', Validators.required],
      MedicalNotes: ['', Validators.required],
    })
  }

  onSubmit() {
    this.model = this.employeeForm.value;
    if (this.employeeId) {
      this.updateEmployee();
    } else {
      this.addEmployee();
    }
  }

  addEmployee() {
    this.model = this.employeeForm.value;
    this.employeeService.addEmployee(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/employees');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  updateEmployee() {
    this.model = this.employeeForm.value;
    this.model.id = this.employeeId;
    this.employeeService.updateEmployee(this.model).subscribe(
      result => {
        console.log(result);
        if ( ! result.error) {
          this.router.navigateByUrl('/backend/employees');
        } else {
          alert('Some thingh went wrong!');
        }
      }
    )
  }

  getEmployee() {
    this.employeeService.getEmployee(this.employeeId).subscribe(
      result => {
        console.log(result);
        this.user = result.data;
        this.employeeForm.patchValue(result.data)
      }
    )
  }




}
