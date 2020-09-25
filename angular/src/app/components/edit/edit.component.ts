import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Zodiac } from '../../models/zodiac';
import { ZodiacService } from '../../services/zodiac.service';
import { Router } from '@angular/router';
import { NgbDate, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  constructor(private editService:UserService, private zodiacUser:ZodiacService, private router: Router) {}

  placement = 'top';
  user: User = (JSON.parse(localStorage.getItem('user')));
  zodiacs: string;
  username: string = this.user.username;
  firstName: string = this.user.firstName;
  lastName: string = this.user.lastName;
  gender:number = this.user.gender;
  description:string = this.user.description;
  
  newDate:NgbDate;
  dob: any = {
    year: new Date(this.user.dateOfBirth).getFullYear(),
    month: new Date(this.user.dateOfBirth).getMonth(),
    day: new Date(this.user.dateOfBirth).getDate()
  }

  new_password:string;
  rep_password:string;
  password:string =(JSON.parse(localStorage.getItem('psw')));
  
  zodiac: Zodiac;
  bday: Date;
  month: number;
  name: string;
  date: number;

  profileImage:any = `assets/images/profile-image-${this.user.userid}.jpg`;

  type ='password';
  pass = 'fas fa-eye-slash text-white';

  type2 ='password';
  pass2 = 'fas fa-eye-slash text-white';

  
  ngOnInit(): void {}

  new_show() {
    if (this.type === 'password') {
      this.type = 'text';
      this.pass = 'fas fa-eye text-white';
    } else{
      this.type = 'password';
      this.pass = 'fas fa-eye-slash text-white';
    }
  }

  rep_show() {
    if (this.type2 === 'password') {
      this.type2 = 'text';
      this.pass2 = 'fas fa-eye text-white';
    } else{
      this.type2 = 'password';
      this.pass2 = 'fas fa-eye-slash text-white';
    }
  }

   edit() {
     if(this.new_password === this.rep_password && this.new_password && this.rep_password !== null){
        this.user = {
          userid: this.user.userid,
          username: this.username,
          password: this.new_password,
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dob.toUTCString(),
          //zodiac: this.zodiacs,
          description: this.description,
          gender: this.gender
        } 
      }else{
        this.dob = new Date(this.dob.year,this.dob.month,this.dob.day,0,0,0,0);
        this.user = {
          userid: this.user.userid,
          username: this.username,
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dob.toUTCString(),
          password: this.password,
          //zodiac: this.zodiacs,
          description: this.description,
          gender: this.gender
        } 
      }
      this.editService.update(this.user).subscribe(
        (response: User) => {
          this.user = response;
          localStorage.setItem('user', JSON.stringify(this.user));
          this.zodiacInfo();
          this.router.navigate(['/profile']);
        }, error => {
          document.getElementById("error").innerHTML = "<p class='alert alert-danger'>Failed to update profile.</p>";
        }
      );
    }
    zodiacInfo(){
      this.bday = new Date(JSON.parse(localStorage.getItem('user')).dateOfBirth);
      this.month = this.bday.getMonth() +1;
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
