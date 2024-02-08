import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'http://localhost:8889/api/auth/';
  private loginUrl = this.baseUrl + 'login';
  private registerUrl = this.baseUrl + 'register';
  private logoutUrl = this.baseUrl + 'logout';
  private tokenKey = 'authenticationToken';

  constructor(private http:HttpClient) {}

  login(username: string, password: string):Observable<any> {
    return this.http.post(this.loginUrl, {username, password});
  }

  register(username: string, password: string ,firstName: string , lastName:string): Observable<any> {
    return this.http.post<any>(this.registerUrl, {username, password,firstName, lastName});
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
  }
}
