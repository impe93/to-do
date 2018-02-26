import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators/map';

import { TokenPayload, TokenResponse } from '../modelli/Token';
import { UserDetails } from '../modelli/User';

@Injectable()
export class AuthService {
  private token: string;

  constructor(private http: HttpClient) { }

  private saveToken(token: string): void {
    localStorage.setItem('to-do-token', token);
    this.token = token;
  }

  public getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('to-do-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('to-do-token');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post', type: 'login'|'registrazione', user: TokenPayload): Observable<any> {
    let base;

    base = this.http.post(`http://localhost:3000/user/${ type }`, user);

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  public registrazione(user: TokenPayload): Observable<any> {
    return this.request('post', 'registrazione', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

}
