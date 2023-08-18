import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  loading = false;
  hidePassword = true;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/),
          this.customEmailValidator
        ]
      ],
      password: [
        '', 
        [Validators.required, Validators.minLength(5), this.passwordContentValidator()]      ]
    });
  }

  customEmailValidator(control: AbstractControl) {
    if (control.value.includes('@') && control.value.includes('.com')) {
      return null;
    }
    return { invalidEmail: true };
  }
  checkUniqueCharacters(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
        const value = control.value;
        const uniqueChars = [...new Set(value.split(''))];
        const hasUniqueCharacters = uniqueChars.length >= 5;
        return hasUniqueCharacters ? null : {notUnique: true};
    };
    
}
passwordContentValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      const hasAlphabet = /[a-zA-Z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      return hasAlphabet && hasNumber ? null : {insufficientContent: true};
  };
}

  onSubmit() {
    if (this.loginForm.valid) {
        console.log(`Email: ${this.loginForm.get('email')?.value}, Password: ${this.loginForm.get('password')?.value}`);
        alert('You are submitted');
    } else {
        alert('Please provide valid inputs');
    }
  }
  toggleHidePassword() {
    this.hidePassword = !this.hidePassword;
  }
  
}
