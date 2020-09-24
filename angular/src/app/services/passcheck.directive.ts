import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidationErrors, FormGroup } from '@angular/forms';
import { ValidateService } from 'src/app/services/validate.service';

@Directive({
  selector: '[appPasscheck]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PasscheckDirective, multi: true}]
})
export class PasscheckDirective implements Validator {

  @Input('appPasscheck') passCheckValidator: string[] = [];

  constructor(private valid: ValidateService) { }

  validate(fg: FormGroup): ValidationErrors {
    return this.valid.MatchPassword(this.passCheckValidator[0], this.passCheckValidator[1])(fg);
  }

}
