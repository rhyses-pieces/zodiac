import { Component, OnInit } from '@angular/core';
import { Zodiac } from '../../models/zodiac';
import {ZodiacService } from '../../services/zodiac.service';

@Component({
  selector: 'app-zodiac-home',
  templateUrl: './zodiac-home.component.html',
  styleUrls: ['./zodiac-home.component.scss']
})
export class ZodiacHomeComponent implements OnInit {

  constructor(private zodiacser:ZodiacService) { }

  zodiacs: Zodiac[];

  ngOnInit(): void {
    this.zodiacser.getZodiac().subscribe(
      (data) => {
        this.zodiacs = data;
        console.log(this.zodiacs);
      }, () => {
        console.log('did not work!')
      }
    )
  }

}
