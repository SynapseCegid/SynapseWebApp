import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public validEmail: boolean;

  constructor(public formBuilder: FormBuilder) {
    this.validEmail = false;
    this.loginForm = this.formBuilder.group({
      mail: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.minLength(6), Validators.required])
    });
  }

  onSubmitMail() {
    this.validEmail = true;

    this.loginForm.get('mail').disable();

  }

  onSubmitPassword() {
    window.location.href = '/dashboard';

  }

  ngOnInit() {
  }

}
