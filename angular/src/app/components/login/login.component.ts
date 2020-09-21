import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private loginService: UserService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  user: User;
  username: string;
  password: string;
  loading: false;

  ngOnInit(): void {
    
  }

  login() {
    this.user = {
      id: 0,
      username: this.username,
      password: this.password,
      firstName: '',
      lastName: '',
      dateOfBirth: '',
      zodiac: '',
      description: '',
      gender: 0
    }

    this.loginService.login(this.user).subscribe(
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
