import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { User } from '../models/user'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base_url:string;

  constructor(private http:HttpClient) {
    this.base_url = "http://localhost:8080/Zodiac";
  }

  getUser():Observable<User[]>{
    return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
  };

  login(user: User): Observable<User> {
    console.log(JSON.stringify(User));
    return this.http.post(`http://localhost:8080/Zodiac/login`, user) as Observable<User>;
  }

  register(user: User): Observable<User> {
    return this.http.post(`http://localhost:8080/Zodiac/user`, user) as Observable<User>;
  }

  update(user: User): Observable<User> {
    return this.http.put(`http://localhost:8080/Zodiac/user`, user) as Observable<User>;
  }

}
