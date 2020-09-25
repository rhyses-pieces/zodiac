import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user: User;
  userid: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  date: string;
  zodiac: string;
  description: string;
  gender: string;

  type = 'password';
  pass = 'fas fa-eye-slash text-white';

  constructor(
    private registerService: UserService,
    private router: Router) { }

  ngOnInit(): void { }

  show() {
    if (this.type === 'password') {
      this.type = 'text';
      this.pass = 'fas fa-eye text-white';
    } else {
      this.type = 'password';
      this.pass = 'fas fa-eye-slash text-white';
    }
  }
  // 
  register() {
    if (new Date(this.date).getFullYear() < 2020 || new Date(this.date).getFullYear() <= 2002) {
      this.user = {
        userid: this.userid,
        username: this.username,
        password: this.password,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: new Date(this.date).toUTCString(),
        description: this.description,
        gender: parseInt(this.gender)
      }

      if (this.username != '' || this.password != '' || this.firstName != '' || this.lastName != '' || this.date != '' || this.gender != '' || new Date(this.date).getFullYear() < 2020 || new Date(this.date).getFullYear() <= 2002) {
        this.registerService.register(this.user).subscribe(
          (response: User) => {
            this.user = response;
            localStorage.setItem('user', JSON.stringify(this.user));
            localStorage.setItem('loggedin', 'true');
            this.router.navigate(['/dashboard']);
          }, error => {
            document.getElementById("error").innerHTML = "<p class='alert alert-danger'>Signup failed! Please check all fields to ensure information is correct.</p>";
          }
        );
      } else if (this.username === '' || this.password === '' || this.firstName === '' || this.lastName === '' || this.date === '' || this.gender === '') {
        document.getElementById("error").innerHTML = "<p class='alert alert-danger'>All fields must be filled out.</p>";
      }
    } else {
      document.getElementById("error").innerHTML = "<p class='alert alert-danger'>Invalid date of birth. You must be 18 years or older to sign up.</p>";
    }
  }
}
