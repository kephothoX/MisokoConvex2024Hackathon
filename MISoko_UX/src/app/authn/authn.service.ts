import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.dev';
import { AppService } from '../app.service';
import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthnService {

  constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  signIn(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/auth/signin`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getAuthURL(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/canva/auth`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  genRefreshToken(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/canva/refreshToken`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  genAccessToken(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/canva/accessToken`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  inspectAccessToken(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/canva/inspect/accessToken`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  revokeRefreshToken(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/canva/revoke/refreshToken`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUserWithEmail(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/users/email`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUser(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/user`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  ifUserAuthenticated(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/users/auth`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateUser(data: Object): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/users/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


}
