import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '@data/services/api/auth.service';

@Component({
  selector: 'app-login-form, [app-login-form]',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  
  public loginForm; 
  public loginSubmmitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.loginForm = this.formBuilder.group({ 
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.maxLength(10)
        ]
      ],
    });
  }

  ngOnInit(): void {
    this.loginForm.get('email')?.setValue('correo@email.com')
  }
  
  get form() {
    return this.loginForm.controls;
  }

  authenticate() {
    this.loginSubmmitted = true;
    if(!this.loginForm.valid) {
      return // ...que no retorne nada
    }
    console.log('Autenticated', this.loginForm.value);
    this.authService.login(this.loginForm.value as {email: string, password: string}).subscribe(r => {
      // error:
      console.log(r)
    })
  }

}
