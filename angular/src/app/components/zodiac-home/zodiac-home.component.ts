import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import {ZodiacService } from '../../services/zodiac.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zodiac-home',
  templateUrl: './zodiac-home.component.html',
  styleUrls: ['./zodiac-home.component.scss']
})
export class ZodiacHomeComponent implements OnInit {

  constructor(private zodiacUser:ZodiacService, private router: Router) {}

  ses:string;

  zodiacs: Zodiac[];
  zodiac:Zodiac;
  zodiacImage:any;

  name:string;
  element:string;
  sun_dates;
  compatibility;
  good_traits:string;
  bad_traits:string;
  symbol:string;
  cardinality:string; 
  ruling_planet:string; 
  how_to_spot:string;
  secret_wish:string;
  favorites:string;
  keywords:string;
  vibe:string;
  body_parts:string; 
  mental_traits:string;
  physical_traits:string;
  famous_people:string;

  ngOnInit(): void {
    this.ses = sessionStorage.getItem("loggedin");
    if(this.ses=='false'){
      this.router.navigate(['']);
    }else{
      this.zodiacUser.getZodiac().subscribe(
        (data) => {
          this.zodiacs = data;
        }, () => {
          console.log('did not work!')
        }
      );
    }
  }
  zodiacDetails(name:string){
    this.zodiacImage = `assets/images/${name}.png`;
    this.zodiacUser.getMoreInfo(name).subscribe(
    (data) => {
      this.zodiac = data;
      this.name= this.zodiac[0].name;
        this.element = this.zodiac[0].element;
        this.sun_dates = this.zodiac[0].sun_dates;
        this.compatibility = this.zodiac[0].compatibility;
        this.good_traits = this.zodiac[0].good_traits;
        this.bad_traits = this.zodiac[0].bad_traits;
        this.symbol = this.zodiac[0].symbol;
        this.cardinality = this.zodiac[0].cardinality; 
        this.ruling_planet = this.zodiac[0].ruling_planet; 
        this.how_to_spot = this.zodiac[0].how_to_spot; 
        this.secret_wish = this.zodiac[0].secret_wish; 
        this.favorites = this.zodiac[0].favorites; 
        this.keywords = this.zodiac[0].keywords; 
        this.vibe = this.zodiac[0].vibe; 
        this.body_parts = this.zodiac[0].body_parts; 
        this.mental_traits = this.zodiac[0].mental_traits; 
        this.physical_traits = this.zodiac[0].physical_traits; 
        this.famous_people = this.zodiac[0].famous_people; 
      
    }, () => {
      console.log('uhh did not work!')
    }
  )  
  }
}