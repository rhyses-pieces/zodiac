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

  user: User = (JSON.parse(sessionStorage.getItem('user')));
  zodiacs:string;
  username: string = this.user.username;

  new_password:string;
  rep_password:string;

  constructor(private editService:UserService, private router: Router) { }

  ngOnInit(): void { console.log(this.user);}



   edit() {
     if(this.new_password === this.rep_password){
      this.user = {
      userid: this.user.userid,
      username: this.username,
      password: this.new_password,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      dateOfBirth: this.user.dateOfBirth,
      zodiac: this.zodiacs,
      description: this.user.description,
      gender: this.user.gender
    }

    this.editService.update(this.user).subscribe(
      (response: User) => {
        this.user = response;
        this.router.navigate(['/profile']);
      }, error => {
        console.log("what happened... it didn't work!");   
      }
    );
  } else{console.log(`new password doesn't work`)}
  }
}
