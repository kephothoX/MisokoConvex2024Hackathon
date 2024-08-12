import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { ErrorService } from '../error/error.service';
import { AppService } from '../app.service';

import { catchError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutoMobilesService {

  constructor(
    private _httpClient: HttpClient,
    private _appService: AppService,
    private _errorService: ErrorService
  ) { }

   getAutoMobilesMakes(): Observable<any> {
      return this._httpClient.get('/assets/AutoMobilesMakes.json').pipe(catchError(this._errorService.handleError));
  }


  newAutoMobile(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/autoMobiles/new`, data).pipe(catchError(this._errorService.handleError));
  }

  updateAutoMobile(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/autoMobiles/update`, data).pipe(catchError(this._errorService.handleError));
  }

  getAllAutoMobiles(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/autoMobiles`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getAutoMobiles(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/autoMobiles/5`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getAutoMobileByID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/autoMobile`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  
}
