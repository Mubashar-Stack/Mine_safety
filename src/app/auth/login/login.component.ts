
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/authservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  title: string;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private messageService: MessageService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigateByUrl('/dashboard');
    }
  }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("app-home");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    this.title = 'Administrator Login';
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      username: [''],
      password: ['']
    })
  }

  onSubmit() {
    this.authService.login({
      username: this.loginForm.get('username').value,
      password: this.loginForm.get('password').value
    }).subscribe(
      result => {
        if (result) {
          this.messageService.clear();
          this.router.navigateByUrl('/dashboard');
        }
      }
    )
  }

  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("app-home");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

}
