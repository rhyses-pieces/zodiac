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
    console.log(this.bdayDay);

    // console.log(this.bdayMonth=='Sep');
    
    if (this.bdayMonth==='Mar') {
      //aires or pisces
      if (parseInt(this.bdayDay)>20) {
        this.name = 'aires';
      } else {
        this.name = 'pisces';
      }
    }
    if (this.bdayMonth=='Apr') {
      if (parseInt(this.bdayDay)>19) {
        this.name = 'taurus';
      } else {
        this.name = 'aires';
      }
    }
    if (this.bdayMonth=='May') {
      if (parseInt(this.bdayDay)>20) {
        this.name = 'gemini';
      } else {
        this.name = 'taurus';
      }
    }
    if (this.bdayMonth=='Jun') {
      if (parseInt(this.bdayDay)>20) {
        this.name = 'cancer';
      } else {
        this.name = 'gemini';
      }
    }
    if (this.bdayMonth=='Jul') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'leo';
      } else {
        this.name = 'cancer';
      }
    }
    if (this.bdayMonth=='Aug') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'virgo';
      } else {
        this.name = 'leo';
      }
    }
    if (this.bdayMonth=='Sep') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'libra';
      } else {
        this.name = 'virgo';
      }
    }

    if (this.bdayMonth=='Oct') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'scorpio';
      } else {
        this.name = 'libra';
      }
    }
    if (this.bdayMonth=='Nov') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'sagittarius';
      } else {
        this.name = 'scorpio';
      }
    }
    if (this.bdayMonth=='Dec') {
      if (parseInt(this.bdayDay)>21) {
        this.name = 'capricorn';
      } else {
        this.name = 'sagittarius';
      }
    }
    if (this.bdayMonth=='Jan') {
      if (parseInt(this.bdayDay)>19) {
        this.name = 'aquarius';
      } else {
        this.name = 'capricorn';
      }
    }
    if (this.bdayMonth=='Feb') { 
      if (parseInt(this.bdayDay)>21) {
        this.name = 'pisces';
      } else {
        this.name = 'aquarius';
      }
    }
    console.log(this.name);

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
