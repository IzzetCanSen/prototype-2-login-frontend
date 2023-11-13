import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {}
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
          this.signinForm.reset();
          this.auth.storeToken(res.token);
          if (this.auth.getRole() === 'User') {
            this.router.navigate(['dashboard']);
          } else {
            this.router.navigate(['adminDashboard']);
          }
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
