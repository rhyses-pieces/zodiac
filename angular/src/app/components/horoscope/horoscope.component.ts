import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../services/horoscope.service';
import { Horoscope } from 'src/app/models/horoscope';
import { ZodiacService } from '../../services/zodiac.service';
import { Zodiac } from 'src/app/models/zodiac';


@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})
export class HoroscopeComponent implements OnInit {

  constructor(private horoService: HoroscopeService, private zodiacser:ZodiacService) { }

  horo: Horoscope;

  zodiac: Zodiac;
  bday: string;
  bdayMonth: string;
  name: string;
  bdayDay: string;
  
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
    this.horoService.getHoroscope(this.name).subscribe(
      (data) => {
        this.horo = data;
        console.log(this.horo);
      }, () => {
        console.log('did not work!')
      }
    )


}
