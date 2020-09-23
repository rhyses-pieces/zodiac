import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  placement = 'top';
  user: User = (JSON.parse(localStorage.getItem('user')));
  zodiacs:string;
  username: string = this.user.username;
  firstName: string =  this.user.firstName;
  lastName: string = this.user.lastName;
  dob: string = new Date(this.user.dateOfBirth).toUTCString();
  gender:number = this.user.gender;

  new_password:string;
  rep_password:string;

  constructor(private editService:UserService, private router: Router) { }

  type ='password';
  pass = 'fas fa-eye text-white';

  type2 ='password';
  pass2 = 'fas fa-eye text-white';

  ngOnInit(): void {}

  new_show(){
    if(this.type==='password'){
      this.type = 'text';
      this.pass = 'fas fa-eye-slash text-white';
    } else{
      this.type = 'password';
      this.pass = 'fas fa-eye text-white';
    }
  }

  rep_show(){
    if(this.type2==='password'){
      this.type2 = 'text';
      this.pass2 = 'fas fa-eye-slash text-white';
    } else{
      this.type2 = 'password';
      this.pass2 = 'fas fa-eye text-white';
    }
  }

   edit() {
     if(this.new_password === this.rep_password){
      this.user = {
        userid: this.user.userid,
        username: this.username,
        password: this.new_password,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dob,
        zodiac: this.zodiacs,
        description: this.user.description,
        gender: this.gender
      }

      this.editService.update(this.user).subscribe(
        (response: User) => {
          this.user = response;
          this.router.navigate(['/profile']);
        }, error => {console.log("what happened... it didn't work!")}
      );
    } else{console.log(`new password doesn't work`)}
  }
}
