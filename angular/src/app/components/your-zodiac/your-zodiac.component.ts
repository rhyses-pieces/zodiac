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

  visibility:boolean = true;


  ngOnInit(): void {
    this.bday =  new Date(JSON.parse(sessionStorage.getItem('user')).dateOfBirth).toUTCString();
    this.bdayMonth = this.bday.split(' ')[2];
    "new Date(dateofbirth).toUTCString" 
    // this.bday = 'Sept';
    console.log(this.bdayMonth);
    // console.log(this.bdayMonth=='Sep');
    
    if (this.bdayMonth=='Mar') {
      this.name = 'aires';
    }
    if (this.bdayMonth=='Apr') {
      this.name = 'taurus';
    }
    if (this.bdayMonth=='May') {
      this.name = 'gemini';
    }
    if (this.bdayMonth=='Jun') {
      this.name = 'cancer';
    }
    if (this.bdayMonth=='Jul') {
      this.name = 'leo';
    }
    if (this.bdayMonth=='Aug') {
      this.name = 'virgo';
    }
    if (this.bdayMonth=='Sep') {
      this.name = 'libra';
    }

    if (this.bdayMonth=='Oct') {
      this.name = 'scorpio';
    }
    if (this.bdayMonth=='Nov') {
      this.name = 'sagittarius';
    }
    if (this.bdayMonth=='Dec') {
      this.name = 'capricorn';
    }
    if (this.bdayMonth=='Jan') {
      this.name = 'aquarius';
    }
    if (this.bdayMonth=='Feb') {
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
