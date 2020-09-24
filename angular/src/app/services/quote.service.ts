import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Quote } from "../models/quote";

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  private baseUrl: string;

  constructor(private http: HttpClient) {this.baseUrl = "https://qvoca-bestquotes-v1.p.rapidapi.com/quote?rapidapi-key=002f044f66msh032a515d1978e39p1464d2jsn62f0c9384f4e";}

  getQuote(): Observable<Quote> {
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    
    return this.http.get(`${this.baseUrl}`, requestOptions) as Observable<Quote>;
  }
}
