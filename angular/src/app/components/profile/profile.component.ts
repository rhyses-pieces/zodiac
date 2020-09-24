import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import { QuoteService } from '../../services/quote.service';
import { Horoscope } from 'src/app/models/horoscope';
import { HoroscopeService } from '../../services/horoscope.service';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  constructor(
    private userService: UserService, 
    private quoteService:QuoteService, 
    private horoService: HoroscopeService, 
    private router: Router) {}

  ses:string;

  zodiac: Zodiac = (JSON.parse(localStorage.getItem('zodiac')));
  
  zodiacImage:any = `assets/images/${this.zodiac.name}.png`;
  visibility:boolean = true;

  horo: Horoscope;
  quote: Quote;

  id: number;
  user: User = (JSON.parse(localStorage.getItem('user')));
  profileImage:any = `assets/images/image-${this.user.userid}.png`;
  firstName:string = this.user.firstName;
  lastName:string = this.user.lastName;

  month:number[]=[];
  months:string[]=[];
  names: string[]=[];
  date: number[]=[];

  following: User[];
  followBy: User[];

  followedByImage:any;
  followingImage:any;

  ngOnInit(): void {
    this.ses = localStorage.getItem("loggedin");
    if(this.ses=='false'){
      console.log(`Session is false`);
      this.router.navigate(['']);
    }
    this.id = (JSON.parse(localStorage.getItem('user')).userid);

    this.horoService.getHoroscope(this.zodiac.name).subscribe(
      (data) => {
        this.horo = data;
      }, () => {
        console.log('did not work!')
      }
    )

   
    this.quoteService.getQuote().subscribe(
      (data) => {
        this.quote = data;
      }, () => {console.log('did not work')}
    )

    this.userService.getFollowBy(this.id).subscribe(
      (data)=>{
        this.followBy = data;

        for(let f of this.followBy){
          this.month.push(new Date(JSON.parse(f.dateOfBirth)).getMonth());
          this.date.push(new Date(JSON.parse(f.dateOfBirth)).getDate());
          
       
        }

        for(let i = 0; i < this.month.length; i++){
          this.followedByImage =`assets/images/image-${this.followBy[i].userid}.png`;
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          this.months.push(months[this.month[i]]);

          if (this.month[i] == 1 && this.date[i] >=20 || this.month[i] == 2 && this.date[i] <=18) {this.names[i] = 'Aquarius';}
          if (this.month[i] == 2 && this.date[i] >=19 || this.month[i] == 3 && this.date[i] <=20){this.names[i] = 'Pisces';}
          if (this.month[i] == 3 && this.date[i] >=21 || this.month[i] == 4 && this.date[i] <=19){this.names[i] = 'Aries';}
          if (this.month[i] == 4 && this.date[i] >=20 || this.month[i] == 5 && this.date[i] <=20){this.names[i] = 'Taurus';}
          if (this.month[i] == 5 && this.date[i] >=21 || this.month[i] == 6 && this.date[i] <=21){this.names[i] = 'Gemini';}
          if (this.month[i] == 6 && this.date[i] >=22 || this.month[i] == 7 && this.date[i] <=22){this.names[i] = 'Cancer';}
          if (this.month[i] == 7 && this.date[i] >=23 || this.month[i] == 8 && this.date[i] <=22) {this.names[i] = 'Leo';}
          if (this.month[i] == 8 && this.date[i] >=23 || this.month[i] == 9 && this.date[i] <=22) {this.names[i] = 'Virgo';}
          if (this.month[i] == 9 && this.date[i] >=23 || this.month[i] == 10 && this.date[i] <=22){this.names[i] = 'Libra';}
          if (this.month[i] == 10 && this.date[i] >=23 || this.month[i] == 11 && this.date[i] <=21){this.names[i] = 'Scorpio';}
          if (this.month[i] == 11 && this.date[i] >=22 || this.month[i] == 12 && this.date[i] <=21){this.names[i] = 'Sagittarius';}
          if (this.month[i] == 12 && this.date[i] >=22 || this.month[i] == 1 && this.date[i] <=19){this.names[i] = 'Capricorn';}
        }
      }
    );

    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.following = data;

        for(let f of this.following){
          this.month.push(new Date(JSON.parse(f.dateOfBirth)).getMonth());
          this.date.push(new Date(JSON.parse(f.dateOfBirth)).getDate());

          this.followingImage =`assets/images/image-${f.userid}.png`;
        }

        for(let i = 0; i < this.month.length; i++){
          let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
          this.months.push(months[this.month[i]]);

          if (this.month[i] == 1 && this.date[i] >=20 || this.month[i] == 2 && this.date[i] <=18) {this.names[i] = 'Aquarius';}
          if (this.month[i] == 2 && this.date[i] >=19 || this.month[i] == 3 && this.date[i] <=20){this.names[i] = 'Pisces';}
          if (this.month[i] == 3 && this.date[i] >=21 || this.month[i] == 4 && this.date[i] <=19){this.names[i] = 'Aries';}
          if (this.month[i] == 4 && this.date[i] >=20 || this.month[i] == 5 && this.date[i] <=20){this.names[i] = 'Taurus';}
          if (this.month[i] == 5 && this.date[i] >=21 || this.month[i] == 6 && this.date[i] <=21){this.names[i] = 'Gemini';}
          if (this.month[i] == 6 && this.date[i] >=22 || this.month[i] == 7 && this.date[i] <=22){this.names[i] = 'Cancer';}
          if (this.month[i] == 7 && this.date[i] >=23 || this.month[i] == 8 && this.date[i] <=22) {this.names[i] = 'Leo';}
          if (this.month[i] == 8 && this.date[i] >=23 || this.month[i] == 9 && this.date[i] <=22) {this.names[i] = 'Virgo';}
          if (this.month[i] == 9 && this.date[i] >=23 || this.month[i] == 10 && this.date[i] <=22){this.names[i] = 'Libra';}
          if (this.month[i] == 10 && this.date[i] >=23 || this.month[i] == 11 && this.date[i] <=21){this.names[i] = 'Scorpio';}
          if (this.month[i] == 11 && this.date[i] >=22 || this.month[i] == 12 && this.date[i] <=21){this.names[i] = 'Sagittarius';}
          if (this.month[i] == 12 && this.date[i] >=22 || this.month[i] == 1 && this.date[i] <=19){this.names[i] = 'Capricorn';}
        }
      }
    )
  
  }
    
}
