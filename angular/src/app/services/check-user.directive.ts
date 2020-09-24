import { Directive, Input, forwardRef } from '@angular/core';
import { Validator, AbstractControl, ValidationErrors, NG_ASYNC_VALIDATORS } from '@angular/forms';
import { ValidateService } from './validate.service';
import { Observable } from 'rxjs/internal/Observable';

@Directive({
  selector: '[appCheckUser]',
  providers: [{ provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => CheckUserDirective), multi: true }]
})
export class CheckUserDirective implements Validator {

  constructor(private valid: ValidateService) { }

  validate(control: AbstractControl): Promise<{ [key: string]: any }> | Observable<{ [key: string]: any }> {
    return this.valid.userNameValidator(control);
  }

}
