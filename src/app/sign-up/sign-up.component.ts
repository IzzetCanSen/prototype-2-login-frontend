import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  signUpFields = [
    { name: 'name', label: 'Name', type: 'text', value: '' },
    { name: 'email', label: 'Email', type: 'email', value: '' },
    { name: 'password', label: 'Password', type: 'password', value: '' },
  ];
  title = 'Sign Up';
  extraInformation = 'Already have an account? Sign Up';

  signUpSubmit() {
    console.log('submit button pressed');
  }
}
