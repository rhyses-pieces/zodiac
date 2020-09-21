import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  hide = false;

  constructor() { }

  ngOnInit(): void {
    if (sessionStorage.getItem('loggedin') == 'true') {
      this.hide = true;
    }
  }

}
