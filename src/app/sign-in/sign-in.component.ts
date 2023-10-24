import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  signInFields = [
    { name: 'email', label: 'Email', type: 'email', value: '' },
    { name: 'password', label: 'Password', type: 'password', value: '' },
  ];

  signInSubmit() {
    console.log('submit button pressed');
  }
}
