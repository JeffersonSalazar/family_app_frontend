/* 
  NOTE: this service is implemented in
  frontend\src\app\components\auth\views\signup\signup.component.ts
  frontend\src\app\components\auth\views\signin\signin.component.ts
*/

import { Injectable } from '@angular/core';

// import package to implement http and rxj
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

// import interface 
import { AuthInterface } from "../../models/interfaces/auth/auth";
import { ChangePasswordInterface } from '../../models/interfaces/auth/changePassword';

import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  private apiUrl: string = environment.baseUrl; // server url

  // injection in the constructor
  constructor(private _http: HttpClient) { }

  // signupUser: method that saves a user's record
  signupUser(registerUser: AuthInterface): Observable<AuthInterface> {
    return this._http.post<AuthInterface>(`${this.apiUrl}/auth/signup`, registerUser);
  };

  // signupUser: method that saves a user's record
  activateAccount(token: string): Observable<AuthInterface> {
    return this._http.post<AuthInterface>(`${this.apiUrl}/auth/active_account`, token);
  };

  // signinUser: method that allows access to users
  signinUser(accessUser: AuthInterface): Observable<AuthInterface> {
    return this._http.post<AuthInterface>(`${this.apiUrl}/auth/signin`, accessUser);
  };

  changePassword(newPassword: ChangePasswordInterface): Observable<ChangePasswordInterface> {
    return this._http.put<ChangePasswordInterface>(`${this.apiUrl}/handler_password/change`, newPassword)
  }

}
