import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  username:string;
  bday:string;

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('user')).username);
    this.username = (JSON.parse(sessionStorage.getItem('user')).username);
    this.bday = (JSON.parse(sessionStorage.getItem('user')).dateOfBirth);
    let birthday = new Date(this.bday).toUTCString();
    console.log(birthday);


  }

}
