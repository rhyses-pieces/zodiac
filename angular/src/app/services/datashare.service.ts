import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class DatashareService {

  constructor(private userService: UserService) { }

  user = sessionStorage.getItem('user');

  public isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public currentUser: BehaviorSubject<any> = new BehaviorSubject<any>(this.user);

}
