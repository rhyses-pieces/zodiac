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
  name: string;

  ngOnInit(): void {
    // this.bday =  (JSON.parse(sessionStorage.getItem('user')).dateOfBirth);
    this.bday = 'Sept';
    if (this.bday=='Sept') {
      this.name = 'virgo';
      
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

}
