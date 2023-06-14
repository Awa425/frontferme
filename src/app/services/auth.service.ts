import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  users: User[] = [
    { login: 'admin1', password: '123', roles: ['ROLE_FERMIER'] },
    { login: 'employe1', password: '123', roles: ['ROLE_EMPLOYE'] },
    { login: 'veterinaire1', password: '123', roles: ['ROLE_VETERINAIRE'] },
  ];
  public loggedUser!: string;
  public isloggedIn: Boolean = false;
  public roles!: string[];

  constructor(private router: Router) {}

  /*logout*/
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined!;
    this.roles = undefined!;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/home']);
  }

  /*login*/
  SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.login == curUser.login && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.login;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }

  isAdmin(): Boolean {
    if (!this.roles)
      //this.roles== undefiened
      return false;
    return this.roles.indexOf('ROLE_FERMIER') > -1;
  }

  isEmploye(): Boolean {
    if (!this.roles)
      //this.roles== undefiened
      return false;
    return this.roles.indexOf('ROLE_EMPLOYE') > -1;
  }

  isVeterinaire(): Boolean {
    if (!this.roles)
      //this.roles== undefiened
      return false;
    return this.roles.indexOf('ROLE_VETERINAIRE') > -1;
  }
}
