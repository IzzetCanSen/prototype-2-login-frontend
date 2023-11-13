import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const adminAuthGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.isSignedIn() && authService.getRole() === 'Admin') {
    return true;
  } else if (authService.isSignedIn() && authService.getRole() === 'User') {
    alert('You do not have access to this page.');
    router.navigate(['/dashboard']);
    return false;
  } else {
    alert('Please sign in.');
    router.navigate(['']);
    return false;
  }
};
