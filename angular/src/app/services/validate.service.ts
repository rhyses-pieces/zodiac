import { Injectable } from '@angular/core';
import { UserService } from './user.service';
import { FormGroup, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
// custom validator to check that two fields match
  constructor(private http: UserService) { }
  MatchPassword(new_password: string, rep_password: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[new_password];
      const matchingControl = formGroup.controls[rep_password];

      // return null if controls haven't initialised yet
      if (!control || !matchingControl) {
        return null;
      }

      // return null if another validator has already found an error on the matchingControl
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return null;
      }

      // set error on matchingControl if validation fails
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }

  userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }

  validateUserName(userName: string) {
    const UserList = this.http.getUsers().subscribe(
      response => {
        return UserList;
      }, error => {
        return console.log("unable to fetch user list!");
      }
    );
    return (UserList.indexOf(userName) > -1);
  }

}
