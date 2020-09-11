import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Zodiac } from '../models/zodiac'

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  private base_url:string;

  constructor(private http:HttpClient) {
    this.base_url = "http://zodiacal.herokuapp.com/api";
  }

  getZodiac(): Observable<Zodiac[]> {
    
    return this.http.get("http://zodiacal.herokuapp.com/api") as Observable<Zodiac[]>;

    // return this.http.get(`${this.base_url}`) as Observable<Zodiac[]>;
  }
}
