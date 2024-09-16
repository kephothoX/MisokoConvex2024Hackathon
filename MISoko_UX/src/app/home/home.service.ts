import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of} from 'rxjs';

import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

   constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
  ) {  }


  searchPNAccessories(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/pNAccessories/search`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  searchSNIndustries(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/sNIndustries/search`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  searchAutoMobiles(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/autoMobiles/search`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  searchENAppliances(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/eNAppliances/search`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  searchLNProperties(data: any): Observable<any> {
    return this._httpClient.post(`${ this._appService.APIEndpoint }/lNProperties/search`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

}
