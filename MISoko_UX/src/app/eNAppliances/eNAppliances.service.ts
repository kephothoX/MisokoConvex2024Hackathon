import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class  ENAppliancesService {

  constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  newENAppliance(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/eNAppliances/new`, data).pipe(catchError(this._errorService.handleError));
  }

  updateENAppliance(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/eNAppliances/update`, data).pipe(catchError(this._errorService.handleError));
  }

  getAllENAppliances(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/eNAppliances`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getENAppliances(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/eNAppliances/5`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getENApplianceByID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/eNAppliance`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }
 
}
