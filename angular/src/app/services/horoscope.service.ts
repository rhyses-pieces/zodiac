import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Horoscope } from "../models/horoscope";
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class HoroscopeService {

  private baseUrl: string;
  private sunsign: User["zodiac"];

  constructor(private http: HttpClient) {
    this.baseUrl = "http://horoscope-api.herokuapp.com/";
  }

  getHoroscope(): Observable<Horoscope> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(`${this.baseUrl}/horoscope/today/${this.sunsign}`, requestOptions) as Observable<Horoscope>;
  }
}
