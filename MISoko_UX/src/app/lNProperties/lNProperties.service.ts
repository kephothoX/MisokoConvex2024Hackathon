import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class  LNPropertiesService {

  constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  newLNProperty(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/lNProperties/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateLNProperty(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/lNProperties/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getAllLNProperties(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/lNProperties`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getLNProperties(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/lNProperties/5`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getLNPropertyByID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/lNProperty`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  getSimilarLNProperties(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/lNProperties/similar`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

 
}