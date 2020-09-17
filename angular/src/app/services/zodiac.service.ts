import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


import { Zodiac } from '../models/zodiac'

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  private base_url:string;
 
  constructor(
    private http:HttpClient,
    ) {
    this.base_url = "http://zodiacal.herokuapp.com/api";
  }

  getZodiac(): Observable<Zodiac[]> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }
    const requestOptions = {               
      headers: new HttpHeaders(headerDict), 
    };
    
    return this.http.get(`${this.base_url}`, requestOptions) as Observable<Zodiac[]>;
  }

  getMoreInfo(name: string): Observable<Zodiac> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }
    const requestOptions = {               
      headers: new HttpHeaders(headerDict), 
    };
    return this.http.get(`http://zodiacal.herokuapp.com/${name}`, requestOptions) as Observable<Zodiac>;
  }
}
