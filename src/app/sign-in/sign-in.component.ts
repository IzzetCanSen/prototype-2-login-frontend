import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(private auth: AuthService, private fb: FormBuilder) {}
  signinForm!: FormGroup;

  ngOnInit(): void {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.auth.signIn(this.signinForm.value).subscribe({
        next: (res) => {
          alert(res.message);
        },
        error: (err) => {
          alert(err?.error.message);
        },
      });
    } else {
      console.log('not valid');
    }
  }
}
