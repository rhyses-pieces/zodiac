import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import {ZodiacService } from '../../services/zodiac.service';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  constructor(private userService:UserService, private zodiacser:ZodiacService) { }

  users: User[];
  id: number;

  user: User;

  // usernames:string[] = [];
  // firstNames:string[]= [];
  // lastNames:string[] =[];
  zodiacs: Zodiac[]=[];
  bdays: string[]=[];
  bdayMonths: string[]=[];
  names: string[]=[];
  bdayDays: string[]=[];



  ngOnInit(): void {
    this.id = (JSON.parse(sessionStorage.getItem('user')).userid);


    this.userService.getUsers().subscribe(
      (data) => {
        this.users = data;
        this.users = this.users.filter(user => user.userid !==this.id);
        // console.log(this.users[0]);
        this.users.forEach(element => {
          // console.log(element);
          // console.log(this.id);
          // console.log(element.userid!==this.id);

            // console.log('elem '+element.dateOfBirth);
            this.bdays.push(new Date(JSON.parse(element.dateOfBirth)).toUTCString());
            // Fri, 18 Sep 2020 18:47:53 GMT
            this.bdays.forEach(element => {
              this.bdayMonths.push(element.split(' ')[2]);
              this.bdayDays.push(element.split(' ')[1]);
            });
            
          
        for (let i=0; i<this.users.length; i++) {
          if (this.bdayMonths[i]==='Mar') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('aires');
            } else {
              this.names.push('pisces');
            }
          }
          if (this.bdayMonths[i]=='Apr') {
            if (parseInt(this.bdayDays[i])>19) {
              this.names.push('taurus');
            } else {
              this.names.push('aires');
            }
          }
          if (this.bdayMonths[i]=='May') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('gemini');
            } else {
              this.names.push('taurus');
            }
          }
          if (this.bdayMonths[i]=='Jun') {
            if (parseInt(this.bdayDays[i])>20) {
              this.names.push('cancer');
            } else {
              this.names.push('gemini');
            }
          }
          if (this.bdayMonths[i]=='Jul') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('leo');
            } else {
              this.names.push('cancer');
            }
          }
          if (this.bdayMonths[i]=='Aug') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('virgo');
            } else {
              this.names.push('leo');
            }
          }
          if (this.bdayMonths[i]=='Sep') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('libra');
            } else {
              this.names.push('virgo');
            }
          }
          // console.log(this.names);
          if (this.bdayMonths[i]=='Oct') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('scorpio');
            } else {
              this.names.push('libra');
            }
          }
          if (this.bdayMonths[i]=='Nov') {
            if (parseInt(this.bdayDays[i])>22) {
              this.names.push('sagittarius');
            } else {
              this.names.push('scorpio');
            }
          }
          if (this.bdayMonths[i]=='Dec') {
            if (parseInt(this.bdayDays[i])>21) {
              this.names.push('capricorn');
            } else {
              this.names.push('sagittarius');
            }
          }
          if (this.bdayMonths[i]=='Jan') {
            if (parseInt(this.bdayDays[i])>19) {
              this.names.push('aquarius');
            } else {
              this.names.push('capricorn');
            }
          }
          if (this.bdayMonths[i]=='Feb') { 
            if (parseInt(this.bdayDays[i])>21) {
              this.names.push('pisces');
            } else {
              this.names.push('aquarius');
            }
          }
        }
        // console.log(this.names);
        this.names.forEach(name => {
          
       
          this.zodiacser.getMoreInfo(name).subscribe(
            (data) => {
              // console.log(name);
              this.zodiacs.push(data);
              // console.log('zodiac '+this.zodiacs[0][0].name);
              // console.log(zodiac[0].element);
            }, () => {
              console.log(name);
              console.log('uhh did not work!')
            }
          )
            }, () => {
              console.log('did not work!')
            }
            
            
            
            
            )
          });
          })
        };


  follow(id:number) {
    console.log('follow pressed');
    this.userService.addFollowing(id).subscribe(

      (response: User) => {
        this.user = response;
        // this.router.navigate(['/dashboard']);
      }, (error) => {
        console.log(error+" what happened... it did NOT work!");
      }
    );

  }

}
