import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Router, ActivatedRoute } from '@angular/router';
import { Zodiac } from '../../models/zodiac';
import { ZodiacService } from '../../services/zodiac.service';
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
  description:string;
  gender:string;

  newDate: NgbDate;
  dob:Date;

  zodiac: Zodiac;

  bday: Date;
  month: number;
  name: string;
  date: number;

  type ='password';
  pass = 'fas fa-eye-slash text-white';

  constructor(
    private registerService: UserService,
    private zodiacUser:ZodiacService,
    private router: Router) {}

  ngOnInit(): void {}

  show(){
    if(this.type==='password'){
      this.type = 'text';
      this.pass = 'fas fa-eye text-white';
    } else{
      this.type = 'password';
      this.pass = 'fas fa-eye-slash text-white';
    }
  }
 
  register() {
    this.dob = new Date(this.newDate.year,this.newDate.month,this.newDate.day,0,0,0,0);
    this.user = {      
      userid: this.userid,
      username: this.username,
      password: this.password,
      firstName: this.firstName,
      lastName: this.lastName,
      dateOfBirth: this.dob.toUTCString(),
      //zodiac: this.zodiac,
      description: this.description,
      gender: parseInt(this.gender)
    }

    this.registerService.register(this.user).subscribe(
      (response: User) => {
        this.user = response;
        localStorage.setItem('user', JSON.stringify(this.user));
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('psw', JSON.stringify(this.password));
        this.zodiacInfo();
        this.router.navigate(['/dashboard']);
        
      }, error => {
        console.log("what happened... it didn't work!");   
      }
    );
  }

  zodiacInfo(){
    this.bday = new Date(JSON.parse(localStorage.getItem('user')).dateOfBirth);
    this.month = this.bday.getMonth();
    this.date = this.bday.getDate();
    if (this.month == 1 && this.date >=20 || this.month == 2 && this.date <=18) {this.name = 'Aquarius';}
    if (this.month == 2 && this.date >=19 || this.month == 3 && this.date <=20) {this.name = 'Pisces';}
    if (this.month == 3 && this.date >=21 || this.month == 4 && this.date <=19) {this.name = 'Aries';}
    if (this.month == 4 && this.date >=20 || this.month == 5 && this.date <=20) {this.name = 'Taurus';}
    if (this.month == 5 && this.date >=21 || this.month == 6 && this.date <=21) {this.name = 'Gemini';}
    if (this.month == 6 && this.date >=22 || this.month == 7 && this.date <=22) {this.name = 'Cancer';}
    if (this.month == 7 && this.date >=23 || this.month == 8 && this.date <=22) {this.name = 'Leo';}
    if (this.month == 8 && this.date >=23 || this.month == 9 && this.date <=22) {this.name = 'Virgo';}
    if (this.month == 9 && this.date >=23 || this.month == 10 && this.date <=22) {this.name = 'Libra';}
    if (this.month == 10 && this.date >=23 || this.month == 11 && this.date <=21) {this.name = 'Scorpio';}
    if (this.month == 11 && this.date >=22 || this.month == 12 && this.date <=21) {this.name = 'Sagittarius';}
    if (this.month == 12 && this.date >=22 || this.month == 1 && this.date <=19) {this.name = 'Capricorn';}

    this.zodiacUser.getMoreInfo(this.name).subscribe(
      (data) => {
        this.zodiac = data;
        localStorage.setItem('zodiac', JSON.stringify(this.zodiac[0]));
      }, () => {
        console.log('uhh did not work!')
      }
    )
  };
}
