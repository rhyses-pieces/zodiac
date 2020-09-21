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

  constructor(private zodiacser:ZodiacService, private router: Router) { }

  zodiacs: Zodiac[];
  ses:string;

  ngOnInit(): void {
    this.ses = sessionStorage.getItem("loggedin");
    if(this.ses=='false'){
      console.log(`Session is false`);
      this.router.navigate(['']);
    }else{
      console.log(`Session is true`);
      this.zodiacser.getZodiac().subscribe(
        (data) => {
          this.zodiacs = data;
          console.log(this.zodiacs);
        }, () => {
          console.log('did not work!')
        }
      );
    }
  }

}
