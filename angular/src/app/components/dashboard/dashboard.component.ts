import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ZodiacService } from '../../services/zodiac.service';
import { User } from '../../models/user';
import { Zodiac } from '../../models/zodiac';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService: UserService, private zodiacUser: ZodiacService, private router: Router) { }

  users: User[];
  user: User;
  id: number;
  description: string;
  postings: string[];

  zodiacs: Zodiac[] = [];
  bday: Date[] = [];
  month: number[] = [];
  months: string[] = [];
  names: string[] = [];
  date: number[] = [];

  following: User[];
  followBy: User[];
  notFollowing: User[];
  notFollowedBy: User[];

  ngOnInit(): void {
    this.id = (JSON.parse(localStorage.getItem('user')).userid);

    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data.filter(not => not.userid !== this.id);
        //People you are NOT following
        this.notFollowing = this.users.filter(({ userid: id1 }) => !this.following.some(({ userid: id2 }) => id2 === id1));
        //People who are NOT following YOU
        // this.notFollowedBy = this.users.filter(({ userid: id1 }) => !this.followBy.some(({ userid: id2 }) => id2 === id1));
      }
    );

    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.following = data;

        for (let f of this.following) {
          this.month.push(new Date(JSON.parse(f.dateOfBirth)).getMonth());
          this.date.push(new Date(JSON.parse(f.dateOfBirth)).getDate());
        }

        for (let i = 0; i < this.month.length; i++) {
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          this.months.push(months[this.month[i]]);

          if (this.month[i] == 1 && this.date[i] >= 20 || this.month[i] == 2 && this.date[i] <= 18) { this.names[i] = 'Aquarius'; }
          if (this.month[i] == 2 && this.date[i] >= 19 || this.month[i] == 3 && this.date[i] <= 20) { this.names[i] = 'Pisces'; }
          if (this.month[i] == 3 && this.date[i] >= 21 || this.month[i] == 4 && this.date[i] <= 19) { this.names[i] = 'Aries'; }
          if (this.month[i] == 4 && this.date[i] >= 20 || this.month[i] == 5 && this.date[i] <= 20) { this.names[i] = 'Taurus'; }
          if (this.month[i] == 5 && this.date[i] >= 21 || this.month[i] == 6 && this.date[i] <= 21) { this.names[i] = 'Gemini'; }
          if (this.month[i] == 6 && this.date[i] >= 22 || this.month[i] == 7 && this.date[i] <= 22) { this.names[i] = 'Cancer'; }
          if (this.month[i] == 7 && this.date[i] >= 23 || this.month[i] == 8 && this.date[i] <= 22) { this.names[i] = 'Leo'; }
          if (this.month[i] == 8 && this.date[i] >= 23 || this.month[i] == 9 && this.date[i] <= 22) { this.names[i] = 'Virgo'; }
          if (this.month[i] == 9 && this.date[i] >= 23 || this.month[i] == 10 && this.date[i] <= 22) { this.names[i] = 'Libra'; }
          if (this.month[i] == 10 && this.date[i] >= 23 || this.month[i] == 11 && this.date[i] <= 21) { this.names[i] = 'Scorpio'; }
          if (this.month[i] == 11 && this.date[i] >= 22 || this.month[i] == 12 && this.date[i] <= 21) { this.names[i] = 'Sagittarius'; }
          if (this.month[i] == 12 && this.date[i] >= 22 || this.month[i] == 1 && this.date[i] <= 19) { this.names[i] = 'Capricorn'; }
        }
      }
    )
  }

  follow(id: number) {
    this.userService.addFollowing(id).subscribe(
      (response: User) => {
        this.user = response;
        this.router.navigate(['/profile']);
      }, (error) => {
        console.log(error + " what happened... it did NOT work!");
      }
    );
  }

  unfollow(id: number) {
    this.userService.removeFollowing(id).subscribe(
      (response: User) => {
        this.user = response;
        this.router.navigate(['/profile']);
      }, (error) => {
        console.log(error + " what happened... it did NOT work!");
      }
    );
  }
}


