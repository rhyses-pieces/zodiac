import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ZodiacService } from '../../services/zodiac.service';
import { User } from '../../models/user';
import { Zodiac } from '../../models/zodiac';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService, private zodiacUser:ZodiacService) {}
  following: User[];
  followBy: User[];
  id: number;

  zodiacs: Zodiac[]=[];
  bday:Date[]=[];
  month: number[]=[];
  names: string[]=[];
  date: number[]=[];

  user = {
    month: this.month,
    date: this.date,
    name: this.names
  }

  ngOnInit(): void {
    this.id = (JSON.parse(localStorage.getItem('user')).userid);

    // this.userService.getFollowBy(this.id).subscribe(
    //   (data)=>{
    //     this.followBy = data;

    //     for(let f of this.followBy){
    //       this.month.push(new Date(JSON.parse(f.dateOfBirth)).getMonth()+1);
    //       this.date.push(new Date(JSON.parse(f.dateOfBirth)).getDate());
    //     }

    //     console.log(this.user.month);console.log(this.user.date);
    //     var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //         // for(let n of this.names){
    //         //   if (m == 1 && d >=20 || m == 2 && d <=18) {n = 'Aquarius';}
    //         //   if (m == 2 && d >=19 || m == 3 && d <=20){n = 'Pisces';}
    //         //   if (m == 3 && d >=21 || m == 4 && d <=19){n = 'Aries';}
    //         //   if (m == 4 && d >=20 || m == 5 && d <=20){n = 'Taurus';}
    //         //   if (m == 5 && d >=21 || m == 6 && d <=21){n = 'Gemini';}
    //         //   if (m == 6 && d >=22 || m == 7 && d <=22){n = 'Cancer';}
    //         //   if (m == 7 && d >=23 || m == 8 && d <=22) {n = 'Leo';}
    //         //   if (m == 8 && d >=23 || m == 9 && d <=22) {n = 'Virgo';}
    //         //   if (m == 9 && d >=23 || m == 10 && d <=22){n = 'Libra';}
    //         //   if (m == 10 && d >=23 || m == 11 && d <=21){n = 'Scorpio';}
    //         //   if (m == 11 && d >=22 || m == 12 && d <=21){n = 'Sagittarius';}
    //         //   if (m == 12 && d >=22 || m == 1 && d <=19){n = 'Capricorn';}
             
    //         // }
    // }
    // )
    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.following = data;
        // this.following.forEach(element => {
        //   this.bdays.push(new Date(JSON.parse(element.dateOfBirth)).toUTCString());
        // });
        // this.bdays.forEach(element => {
        //     this.bdayMonths.push(element.split(' ')[2]);
        //     this.bdayDays.push(element.split(' ')[1]);  
        // });
       
        // for (let i=0; i<this.bdayMonths.length; i++) {
        //   if (this.bdayMonths[i]==='Mar') {
        //     if (parseInt(this.bdayDays[i])>20) {
        //       this.names.push('aires');
        //     } else {
        //       this.names.push('pisces');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Apr') {
        //     if (parseInt(this.bdayDays[i])>19) {
        //       this.names.push('taurus');
        //     } else {
        //       this.names.push('aires');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='May') {
        //     if (parseInt(this.bdayDays[i])>20) {
        //       this.names.push('gemini');
        //     } else {
        //       this.names.push('taurus');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Jun') {
        //     if (parseInt(this.bdayDays[i])>20) {
        //       this.names.push('cancer');
        //     } else {
        //       this.names.push('gemini');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Jul') {
        //     if (parseInt(this.bdayDays[i])>22) {
        //       this.names.push('leo');
        //     } else {
        //       this.names.push('cancer');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Aug') {
        //     if (parseInt(this.bdayDays[i])>22) {
        //       this.names.push('virgo');
        //     console.log('names'+this.names)
        //     } else {
        //       this.names.push('leo');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Sep') {
        //     if (parseInt(this.bdayDays[i])>22) {
        //       this.names.push('libra');
        //     } else {
        //       this.names.push('virgo');
        //     }
        //   }

        //   if (this.bdayMonths[i]=='Oct') {
        //     if (parseInt(this.bdayDays[i])>22) {
        //       this.names.push('scorpio');
        //     } else {
        //       this.names.push('libra');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Nov') {
        //     if (parseInt(this.bdayDays[i])>22) {
        //       this.names.push('sagittarius');
        //     } else {
        //       this.names.push('scorpio');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Dec') {
        //     if (parseInt(this.bdayDays[i])>21) {
        //       this.names.push('capricorn');
        //     } else {
        //       this.names.push('sagittarius');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Jan') {
        //     if (parseInt(this.bdayDays[i])>19) {
        //       this.names.push('aquarius');
        //     } else {
        //       this.names.push('capricorn');
        //     }
        //   }
        //   if (this.bdayMonths[i]=='Feb') { 
        //     if (parseInt(this.bdayDays[i])>21) {
        //       this.names.push('pisces');
        //     } else {
        //       this.names.push('aquarius');
        //     }
        //   }
        // }
      }
    )
  }
}


