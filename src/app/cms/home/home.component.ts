import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.add("app-home");
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("bg-default");
    

  }
  ngOnDestroy() {
    var html = document.getElementsByTagName("html")[0];
    html.classList.remove("app-home");
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("bg-default");
  }

}
