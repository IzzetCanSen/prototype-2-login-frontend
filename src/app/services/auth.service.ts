import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7217/api/User/';
  constructor(private http: HttpClient, private router: Router) {}

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signup`, userObj);
  }
  signIn(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signin`, userObj);
  }
  signOut() {
    localStorage.removeItem('token');
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
}
