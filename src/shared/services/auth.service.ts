import { Injectable, Injector } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoginComponent } from '../components/login/login.component';
import { QgisComponent } from '../components/qgis/qgis.component';
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

  public userObserver = new BehaviorSubject<User>(this.user);

  constructor(
    protected injector: Injector,
    private dialog: MatDialog
  ) {
    super("", injector, 'none', User.fromJson);

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

    this.userObserver.next(this.user);
    window.sessionStorage.setItem('user', JSON.stringify(this.user))
  }

  public getTokenRequest(userData): Observable<Token> {
    const url = this.env.apis.pf + `${this.apiPath}/auth/token`;
    return this.http.get(url, { params: userData });
  }

  public getTokenSinespRequest(tokenSinesp): Observable<Token> {
    const url = this.env.apis.pf + `${this.apiPath}/auth/token-sinesp`;
    return this.http.get(url, { params: {token: tokenSinesp} });
  }

  public getUserRequest(): Observable<User> {
    const url = this.env.apis.pf + `${this.apiPath}/users/user`;
    return this.http.get(url, { headers: { 'Authorization': 'Bearer ' + this.token.access_token } });
  }

  public doLogin(userData): Promise<User> {
    return new Promise((resolve, reject) => {
      this.getTokenRequest(userData).toPromise().then(tokenData => {
        this.setToken(tokenData);

        this.getUserRequest().toPromise().then(userDataResult => {
          this.setUser(userDataResult);
          resolve(userDataResult);
        }).catch(error => {
          reject(error['status']);
        })
      }).catch(error => {
        reject(error['status']);
      });
    });
  }

  public doLoginSinesp(token): Promise<User> {
    return new Promise((resolve, reject) => {
      this.getTokenSinespRequest(token).toPromise().then(tokenData => {
        this.setToken(tokenData);

        this.getUserRequest().toPromise().then(userDataResult => {
          this.setUser(userDataResult);
          resolve(userDataResult);
        }).catch(error => {
          reject(error);
        })
      }).catch(error => {
        reject(error);
      });
    });
  }

  public doRecovery(email): Observable<any> {
    const url = this.env.apis.pf + `${this.apiPath}/users/passwd/recovery/`;
    return this.http.post(url, {email : email});
  }

  public logout() {
    this.user = new User();
    this.userObserver.next(this.user);
    window.sessionStorage.clear();
  }

  public openModalLogin() {
    const dialogRef = this.dialog.open(LoginComponent, Helper.checkMobile() ? {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw',
      data: { action: 'login' }
    } : {
      minWidth: '25vw',
      data: { action: 'login' }
    },
    );

  }

  public openModalQGIS() {
    const dialogRef = this.dialog.open(QgisComponent, Helper.checkMobile() ? {
      maxWidth: '100vw',
      maxHeight: '100vh',
      height: '100vh',
      width: '100vw'
    } : {
      width: "50%"
      },
    );
  }

  public isLogged() {
    return this.user.id != null;
  }

}
