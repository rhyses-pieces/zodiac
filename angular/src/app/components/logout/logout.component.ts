import { Component, OnInit } from '@angular/core';
import {UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private userser:UserService, private router: Router) { }
  
  user: User;

  logout() {
        localStorage.setItem('user', '');
        localStorage.setItem('loggedin', 'false');
        this.router.navigate(['']);

  }

  ngOnInit(): void {
  }

}
