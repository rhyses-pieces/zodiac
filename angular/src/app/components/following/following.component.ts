import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ZodiacService } from '../../services/zodiac.service';
import { User } from '../../models/user';
import { Zodiac } from '../../models/zodiac';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.scss']
})
export class FollowingComponent implements OnInit {

  constructor(private userService:UserService, private zodiacser:ZodiacService) { }

  users: User[];
  id: number;
  i:number;

  zodiacs: Zodiac[]=[];
  bdays: string[]=[];
  bdayMonths: string[]=[];
  names: string[]=[];
  bdayDays: string[]=[];
  ngOnInit(): void {
    this.id = (JSON.parse(sessionStorage.getItem('user')).userid);
    this.userService.getFollowing(this.id).subscribe(
      (data) => {
        this.users = data;
        console.log(this.users);
        

         for (this.i=0; this.i<this.users.length; this.i++) {

           console.log(this.users);
           console.log(this.users[this.i].userid);
           this.zodiacser.getUserZodiacInfo(this.users[this.i].userid).subscribe(
             (data) => {
               console.log(data);
               this.zodiacs.push(data);
               console.log(this.zodiacs)
          
              }, (error) => {
                console.log(error+' uhh did not work!')
            }
          )
        } 
      }
      )
    };
}

   

              // this.users.forEach(element => {
        //   // console.log('elem '+element.dateOfBirth);
        //   this.bdays.push(new Date(JSON.parse(element.dateOfBirth)).toUTCString());
        //   // Fri, 18 Sep 2020 18:47:53 GMT
        //   this.bdays.forEach(element => {
        //     this.bdayMonths.push(element.split(' ')[2]);
        //     this.bdayDays.push(element.split(' ')[1]);
        //   });
          
        //   // this.usernames.push(element.username);
        //   // this.firstNames.push(element.firstName);
        //   // this.lastNames.push(element.lastName);
        //   // console.log('arrays : '+this.bdays)
        //   // console.log('arrays1 : '+this.firstNames)

       
        // for (let i=0; i<this.users.length; i++) {
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
        //   // console.log(this.names);
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
        // console.log(this.names);
        // this.names.forEach(name => {