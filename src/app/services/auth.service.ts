import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = 'https://localhost:7217/api/User/';
  constructor(private http: HttpClient) {}

  signUp(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signup`, userObj);
  }
  signIn(userObj: any) {
    return this.http.post<any>(`${this.baseUrl}signin`, userObj);
  }
}
