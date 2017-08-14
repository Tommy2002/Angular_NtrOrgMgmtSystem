import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticationService {
  public token: string;

  private api = 'http://127.0.0.1:8000';
  private headers: Headers = new Headers();

  constructor(
    private http: Http
  ) {
    this.headers.append('Content-Type', 'application/json');
    const currenUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currenUser && currenUser.token;
  }

  login(username: string, password: string): Observable<boolean> {
    return this.http.post(`${this.api}/api-token-auth/`,
      JSON.stringify({ username: username, password: password }), { headers: this.headers })
      .map((resposne: Response) => {
        const token = resposne.json() && resposne.json().token;
        if (token) {
          this.token = token;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          return false;
        }
      });
  }

  isLogin(): boolean {
    if (this.token) {
      return true;
    } else {
      return false;
    }
  }

  verify(): Observable<boolean> {
    return this.http.post(`${this.api}/api-token-verify/`, JSON.stringify({ token: this.token }), { headers: this.headers })
      .map((response: Response) => {
        if (response.status === 200) {
          return true;
        }
        return false;
      })
      .catch(this.errorHandler);
  }

  refresh(): Observable<boolean> {
    return this.http.post(`${this.http}/api-token-refresh`, JSON.stringify({ token: this.token }))
      .map((response: Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          const username = JSON.parse(localStorage.getItem('currentUser')).username;
          localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
          return true;
        } else {
          return false;
        }
      });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  private errorHandler(error: Error | any): Observable<any> {
    return Observable.throw(error);
  }
}
