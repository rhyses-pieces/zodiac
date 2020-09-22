import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  placement = 'top';

  user: User;
  userid: number;
  username: string;
  password: string;
  firstName:string;
  lastName:string;
  date:string;
  zodiac:string;
  description:string;
  gender:string;

  constructor(
    private calendar: NgbCalendar,
    private registerService: UserService,
    private router: Router) {}

  ngOnInit(): void {}

  register() {
    this.user = {
      userid: this.userid,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: new Date(this.date).toUTCString(),
      zodiac: this.zodiac,
      description: this.description,
      gender: parseInt(this.gender)
    }

    this.registerService.register(this.user).subscribe(
      (response: User) => {
        this.user = response;
        sessionStorage.setItem('user', JSON.stringify(this.user));
        sessionStorage.setItem('loggedin', 'true');
        console.log(sessionStorage);
        this.router.navigate(['/dashboard']);
      }, error => {
        console.log("what happened... it didn't work!");   
      }
    );
}
}
