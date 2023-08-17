import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  apiURL: string = 'http://localhost:8000/api/login_check';
  private userSubject: BehaviorSubject<any>;
  public user: Observable<any>;

  // public loggedUser!: string;
  // public isloggedIn: Boolean = false;
  // public roles!: string[];

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem('user') || '')
    );
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): any {
    return this.userSubject.value;
  }

  login(username: string, password: string) {
    return this.http
      .post<any>(this.apiURL, {
        username,
        password,
      })
      .pipe(
        map((user) => {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('user', JSON.stringify(user));
          this.userSubject.next(user);
          return user;
        })
      );
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/home']);
  }

  // saveToken(jwt: string) {
  //   localStorage.setItem('jwt', jwt);
  //   this.token = jwt;
  //   this.isloggedIn = true;
  // }

  // loadToken() {
  //   this.token = localStorage.getItem('jwt');
  // }
  // getToken(): string {
  //   return this.token;
  // }

  // isAdmin(): Boolean {
  //   if (!this.roles)
  //     //this.roles== undefiened
  //     return false;
  //   return this.roles.indexOf('ROLE_FERMIER') >= 0;
  // }

  // isEmploye(): Boolean {
  //   if (!this.roles)
  //     //this.roles== undefiened
  //     return false;
  //   return this.roles.indexOf('ROLE_EMPLOYE') > -1;
  // }

  // isVeterinaire(): Boolean {
  //   if (!this.roles)
  //     //this.roles== undefiened
  //     return false;
  //   return this.roles.indexOf('ROLE_VETERINAIRE') > -1;
  // }
}
