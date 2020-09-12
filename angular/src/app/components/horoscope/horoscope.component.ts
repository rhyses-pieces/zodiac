import { Component, OnInit } from '@angular/core';
import { HoroscopeService } from '../../services/horoscope.service';

@Component({
  selector: 'app-horoscope',
  templateUrl: './horoscope.component.html',
  styleUrls: ['./horoscope.component.scss']
})
export class HoroscopeComponent implements OnInit {

  constructor(private horoService: HoroscopeService) { }

  ngOnInit(): void {
  }

}
