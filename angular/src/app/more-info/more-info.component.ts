import { Component, OnInit } from '@angular/core';
import {ZodiacService } from '../services/zodiac.service';
import { Zodiac } from '../models/zodiac';
import { ActivatedRoute }  from '@angular/router';
@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.scss']
})
export class MoreInfoComponent implements OnInit {

  constructor(private zodiacser:ZodiacService, private route: ActivatedRoute) { }
  
  sunSign: Zodiac;
  name: string;

  ngOnInit(): void {
    this.zodiacser.getMoreInfo(name).subscribe(params => {
      this.name = params['name'];
    },
      (data) => {
        this.sunSign = data;
        console.log(data);
      }, () => {
        console.log('did not work in more info!')
      }
    )

      // this.route.queryParams.subscribe(params => {
      //   this.name = params['name'];
      // });
    
  }

}
