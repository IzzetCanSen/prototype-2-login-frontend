import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7217/api/User/';
  private userPayLoad: any;
  constructor(private http: HttpClient, private router: Router) {}

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signup`, userObj);
  }

  signIn(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signin`, userObj).pipe(
      tap((response) => {
        const token = response.token;
        this.storeToken(token);
        this.userPayLoad = this.decodedToken(token);
        this.storeRole(this.userPayLoad.role);
      })
    );
  }

  signOut() {
    localStorage.clear();
    this.router.navigate(['']);
  }

  storeToken(tokenValue: string) {
    localStorage.setItem('token', tokenValue);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  isSignedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  decodedToken(token: string) {
    const jwtHelper = new JwtHelperService();
    return jwtHelper.decodeToken(token);
  }

  storeRole(roleValue: string) {
    localStorage.setItem('role', roleValue);
  }

  getRole() {
    return localStorage.getItem('role');
  }
}
