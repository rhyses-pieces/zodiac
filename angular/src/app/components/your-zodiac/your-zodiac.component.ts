import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import {ZodiacService } from '../../services/zodiac.service';

@Component({
  selector: 'app-your-zodiac',
  templateUrl: './your-zodiac.component.html',
  styleUrls: ['./your-zodiac.component.scss']
})
export class YourZodiacComponent implements OnInit {

  constructor(private zodiacser:ZodiacService) { }

  zodiac: Zodiac;
  bday: string;
  bdayMonth: string;
  name: string;
  bdayDay: string;

  visibility:boolean = true;


  ngOnInit(): void {
    this.bday =  new Date(JSON.parse(sessionStorage.getItem('user')).dateOfBirth).toUTCString();
    this.bdayMonth = this.bday.split(' ')[2];
    this.bdayDay = this.bday.split(' ')[1];

    "new Date(dateofbirth).toUTCString" 
    // this.bday = 'Sept';
    console.log(this.bdayMonth);
    // console.log(this.bdayMonth=='Sep');
    
    if (this.bdayMonth==='Mar' && parseInt(this.bdayDay)>20) {
      //aires or pisces
      this.name = 'aires';
    }
    if (this.bdayMonth=='Apr' && parseInt(this.bdayDay)>19) {
      this.name = 'taurus';
    }
    if (this.bdayMonth=='May' && parseInt(this.bdayDay)>20) {
      this.name = 'gemini';
    }
    if (this.bdayMonth=='Jun' && parseInt(this.bdayDay)>20) {
      this.name = 'cancer';
    }
    if (this.bdayMonth=='Jul' && parseInt(this.bdayDay)>22) {
      this.name = 'leo';
    }
    if (this.bdayMonth=='Aug' && parseInt(this.bdayDay)>22) {
      this.name = 'virgo';
    }
    if (this.bdayMonth=='Sep' && parseInt(this.bdayDay)>22) {
      this.name = 'libra';
    }

    if (this.bdayMonth=='Oct' && parseInt(this.bdayDay)>22) {
      this.name = 'scorpio';
    }
    if (this.bdayMonth=='Nov' && parseInt(this.bdayDay)>22) {
      this.name = 'sagittarius';
    }
    if (this.bdayMonth=='Dec' && parseInt(this.bdayDay)>21) {
      this.name = 'capricorn';
    }
    if (this.bdayMonth=='Jan' && parseInt(this.bdayDay)>19) {
      this.name = 'aquarius';
    }
    if (this.bdayMonth=='Feb' && parseInt(this.bdayDay)>21) {
      this.name = 'pisces';
    }


    this.zodiacser.getMoreInfo(this.name).subscribe(
      (data) => {
        console.log(this.name);
        this.zodiac = data;
        console.log(this.zodiac);
        console.log(this.zodiac[0].element);
      }, () => {
        console.log(this.name);
        console.log('uhh did not work!')
      }
    )
    
  }
  toggleVis() {
    this.visibility =!this.visibility;
  }

}
