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
    if (localStorage.getItem('loggedin') == 'true') {
      this.hide = true;
    }
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('loggedin');
    localStorage.removeItem('zodiac');
  }

}
