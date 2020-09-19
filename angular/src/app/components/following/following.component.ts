import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private userService:UserService) { }

  users: User[];
  id: number;
  // ngOnInit(): void {
  //   this.userService.getUsers().subscribe(
  //     (data) => {
  //       this.user = data;
  //       console.log(this.user);
  //     }, () => {
  //       console.log('did not work!')
  //     }
  //   )
  // }

  ngOnInit(): void {
    console.log(JSON.parse(sessionStorage.getItem('user')));
    this.id = (JSON.parse(sessionStorage.getItem('user')).userid);


    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
      }, () => {
        console.log('did not work!')
      }
    )
  }
  

}
