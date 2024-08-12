import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class  SNIndustryService {

   constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  newSNIndustry(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/sNIndustries/new`, data).pipe(catchError(this._errorService.handleError));
  }

  updateSNIndustry(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/sNIndustries/update`, data).pipe(catchError(this._errorService.handleError));
  }

  getAllSNIndustries(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/sNIndustries`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getSNIndustries(): Observable<any> {
    return this._httpClient.get(`${ this._appService.APIEndpoint }/sNIndustries/5`, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getSNIndustryByID(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/sNIndustry`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }
 
}
