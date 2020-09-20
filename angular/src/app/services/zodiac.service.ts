import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';

import { User } from '../models/user'
import { Zodiac } from '../models/zodiac'

@Injectable({
  providedIn: 'root'
})
export class ZodiacService {

  private base_url:string;

  user: User;
  username:string;
  firstName:string;
  lastName:string;
  zodiac: Zodiac;
  bday: string;
  bdayMonth: string;
  name: string;
  bdayDay: string;
 
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

  getUser(id:number):Observable<User>{
    // return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
    console.log(id);  
    return this.http.get(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/user/${id}`) as Observable<User>;

  };

  getUserZodiacInfo(id: number): Observable<Zodiac> {

    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': '*',
    }
    const requestOptions = {               
      headers: new HttpHeaders(headerDict), 
    };

    console.log(id);
    this.getUser(id).subscribe(
      (response: User) => {
        this.user = response;
        console.log(this.user);
        console.log(new Date(this.user.dateOfBirth).toUTCString());
        this.bday =  new Date(this.user.dateOfBirth).toUTCString();
        this.bdayMonth = this.bday.split(' ')[2];
        this.bdayDay = this.bday.split(' ')[1];
        this.username = (this.user).username;
        this.firstName = (this.user).firstName;
        this.lastName = (this.user).lastName;
        
        "new Date(dateofbirth).toUTCString" 
        // this.bday = 'Sept';
        console.log(this.bdayMonth);
        console.log(this.bdayDay);
        
        // console.log(this.bdayMonth=='Sep');
        
        if (this.bdayMonth==='Mar') {
          //aires or pisces
      if (parseInt(this.bdayDay)>20) {
        this.name = 'aires';

      } else {
        this.name = 'pisces';

      }
    }
    if (this.bdayMonth=='Apr') {
      if (parseInt(this.bdayDay)>19) {
        this.name = 'taurus';

      } else {
        this.name = 'aires';

      }
    }
    if (this.bdayMonth=='May') {
      if (parseInt(this.bdayDay)>20) {
        this.name = 'gemini';

      } else {
        this.name = 'taurus';

      }
    }
    if (this.bdayMonth=='Jun') {
      if (parseInt(this.bdayDay)>20) {
        this.name = 'cancer';


      } else {
        this.name = 'gemini';

      }
    }
    if (this.bdayMonth=='Jul') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'leo';

      } else {
        this.name = 'cancer';
        console.log(this.name);


      }
    }
    if (this.bdayMonth=='Aug') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'virgo';
        console.log(this.name);

      } else {

        this.name = 'leo';

      }
    }
    if (this.bdayMonth=='Sep') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'libra';

      } else {
        this.name = 'virgo';
        console.log(this.name);

      }
    }
    
    if (this.bdayMonth=='Oct') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'scorpio';

      } else {
        this.name = 'libra';

      }
    }
    if (this.bdayMonth=='Nov') {
      if (parseInt(this.bdayDay)>22) {
        this.name = 'sagittarius';

      } else {
        this.name = 'scorpio';

      }
    }
    if (this.bdayMonth=='Dec') {
      if (parseInt(this.bdayDay)>21) {
        this.name = 'capricorn';

      } else {
        this.name = 'sagittarius';

      }
    }
    if (this.bdayMonth=='Jan') {
      if (parseInt(this.bdayDay)>19) {
        this.name = 'aquarius';

      } else {
        this.name = 'capricorn';

      }
    }
    if (this.bdayMonth=='Feb') { 
      if (parseInt(this.bdayDay)>21) {
        this.name = 'pisces';

      } else {
        this.name = 'aquarius';

      }
    }
    console.log(this.name);
    this.getMoreInfo(this.name).subscribe(
      (response: Zodiac) => {
        console.log(response);
        this.zodiac = response;
      }
    );
      
  return this.http.get(`http://zodiacal.herokuapp.com/${this.name}`, requestOptions) as Observable<Zodiac>;
    
    
  }
    )
  }
  }