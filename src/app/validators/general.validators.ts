import {AbstractControl, ValidationErrors, ValidatorFn} from "@angular/forms";
import {UserService} from "../services/user-service/user-service.service";
import { Injector } from '@angular/core';
import { HttpClient } from "@angular/common/http";
export class GeneralValidators{
  constructor() {
  }
      static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >= 0)
          return {cannotContainSpace:true}
        return null;
      }

  static passwordsMatch(passwordField: string, confirmPasswordField: string): ValidatorFn {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const password = formGroup.get(passwordField)?.value;
      const confirmPassword = formGroup.get(confirmPasswordField)?.value;
      if (password !== confirmPassword) {
        formGroup.get(confirmPasswordField)?.setErrors({ passwordsMismatch: true });
        return { passwordsMismatch: true };
      }
      formGroup.get(confirmPasswordField)?.setErrors(null);
      return null;
    };
  }
  static invalidCharacters(control: AbstractControl): ValidationErrors | null {
    const regex = /^[a-zA-Z0-9_]*$/;
    if (!regex.test(control.value)) {
      return { invalidCharacters: true };
    }
    return null;
  }
  static usernameTaken(control: AbstractControl): Promise<ValidationErrors | null>
  {
    return new Promise((resolve, reject) => {
      UserService.uniqueUsername(control.value)
        .subscribe(
          (res) => {
            if (res.istaken) {
              resolve({ usernameTaken: true });
            } else {
              resolve(null);
            }
          },
          (error) => {
            console.error('Validation error:', error);
            resolve(null);
          }
        );
    });
  }
  static emailTaken(control: AbstractControl): Promise<ValidationErrors | null>
  {
    return new Promise((resolve, reject) => {
      UserService.uniqueEmail(control.value)
        .subscribe(
          (res) => {
            if (res.istaken) {
              resolve({ emailTaken: true });
            } else {
              resolve(null);
            }
          },
          (error) => {
            console.error('Validation error:', error);
            resolve(null);
          }
        );
    });
  }
}
