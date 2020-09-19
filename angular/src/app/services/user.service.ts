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
    // this.base_url = "http://localhost:8080/Zodiac";
    this.base_url = "http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac";

  }

  getUsers():Observable<User[]>{
    // return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
      return this.http.get(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/user`) as Observable<User[]>;

  };

  // getUser(id:number):Observable<User>{
  //   // return this.http.get(`http://localhost:8080/Zodiac/user`) as Observable<User[]>;
  //     return this.http.get(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/user/${id}`) as Observable<User>;

  // };

  login(user: User): Observable<User> {
    console.log(JSON.stringify(user));
    return this.http.post(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/login`, user) as Observable<User>;
  }

  register(user: User): Observable<User> {
    return this.http.post(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/user`, user) as Observable<User>;
  }

  update(user: User): Observable<User> {
    return this.http.put(`http://ec2-3-133-144-188.us-east-2.compute.amazonaws.com:8085/Zodiac/user`, user) as Observable<User>;
  }

}
