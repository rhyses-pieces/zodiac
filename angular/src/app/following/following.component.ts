import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user';


@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private userService:UserService) {

   }
  user: User[];

  ngOnInit(): void {
    this.userService.getUser().subscribe(
      (data) => {
        this.user = data;
        console.log(this.user);
      }, () => {
        console.log('did not work!')
      }
    )
  }

}
