import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { Helper } from '../utils/Helper';

import { Token } from './../models/token.model';
import { User } from './../models/user.model';
import { BaseRecursoService } from './base-resource.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseRecursoService<User> {

  private token: Token = new Token();
  private user: User = new User();

  constructor(protected injector: Injector,  private dialog: MatDialog,) {
    super("/auth", injector, 'none', User.fromJson);

    if (window.sessionStorage.getItem('user')) {
      this.setUser(JSON.parse(window.sessionStorage.getItem('user')));
    }

    if (window.sessionStorage.getItem('token')) {
      this.setToken(JSON.parse(window.sessionStorage.getItem('token')));
    }
  }


  public getToken(): Token {
    return this.token;
  }

  public setToken(token: Token) {
    this.token = new Token(
      token.access_token,
      token.token_type,
      token.iss,
      token.sub,
      token.name,
      token.exp,
      token.iat,
      token.roles,
      token.elearning_url
    );

    window.sessionStorage.setItem('token', JSON.stringify(this.token))
  }

  public getUser(): User {
    return this.user;
  }

  public setUser(userData: User) {
    this.user = new User(
      userData.id,
      userData.email,
      userData.status,
      userData.name,
      userData.allowedIps,
      userData.updateDate,
      userData.organization,
      userData.geometryContract,
      userData.roles,
      userData.administrativeRoles,
      userData.imageTypes,
      userData.groups,
      userData.contracts,
      userData.limitAreaTotal,
      userData.hasMosaicLayers,
      userData.limitAreaM2
    );

    window.sessionStorage.setItem('user', JSON.stringify(this.user))
  }

  public openModalLogin() {
    const dialogRef = this.dialog.open(LoginComponent, Helper.checkMobile() ? {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw',
      data: {action : 'login'}
    } : {
      minWidth: '25vw',
        data: {action : 'login'}
      },
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  public login(userData): Observable<User> {
    const url = this.env.apis.pf + `${this.apiPath}/token`;
    return this.http.get(url, { params: userData });
  }

  public logout() {
    this.user = new User();
    window.sessionStorage.clear();
  }

  public isLogged() {
    return this.user.id != null;
  }

}
