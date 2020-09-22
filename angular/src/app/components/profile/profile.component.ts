import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import { ZodiacService } from '../../services/zodiac.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(private userService: UserService, private zodiacUser:ZodiacService, private router: Router) { }

  ses:string;

  zodiac: Zodiac = (JSON.parse(localStorage.getItem('zodiac')));
  sun_dates0 = this.zodiac.sun_dates[0];
  sun_dates1 = this.zodiac.sun_dates[1];

  visibility:boolean = true;

  user: User = (JSON.parse(localStorage.getItem('user')));
  firstName:string = this.user.firstName;
  lastName:string = this.user.lastName;

  toggleVis() {
    this.visibility =!this.visibility;
  }

  ngOnInit(): void {
    this.ses = localStorage.getItem("loggedin");
    if(this.ses=='false'){
      console.log(`Session is false`);
      this.router.navigate(['']);
    }
  }
    
}
