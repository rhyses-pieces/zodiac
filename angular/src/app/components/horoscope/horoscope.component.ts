import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../services/horoscope.service';
import { Horoscope } from 'src/app/models/horoscope';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})
export class HoroscopeComponent implements OnInit {

  constructor(private horoService: HoroscopeService) { }

  horo: Horoscope;

  ngOnInit(): void {
    this.horoService.getHoroscope().subscribe(
      (data) => {
        this.horo = data;
        console.log(this.horo);
      }, () => {
        console.log('did not work!')
      }
    )
  }

}
