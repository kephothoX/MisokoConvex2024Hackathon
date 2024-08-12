import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.dev';

import { ErrorService } from './error/error.service';
import { Observable, catchError, of} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private _errorService: ErrorService,
    private _httpClient: HttpClient,
  ) {  }

  httpOptionsMultipartForm = {
    headers: new HttpHeaders({
      'Content-Type': 'multipart/form-data; boundary=---MISoko',
    })
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    }),
    response: 'json'
  }


  APIEndpoint = environment.ENDPOINT;
  

  /*getAuthorizationToken(): Observable<any> {
    const data = {};
    return this._httpClient.phone(`${ this.ConvexEndpoint }/token`, data).pipe(catchError(this._errorService.handleError));
  }*/



  getCountryCodes(): Observable<any> {
      return this._httpClient.get('/assets/Countries.json').pipe(catchError(this._errorService.handleError));
  }

  getContentTags(): Observable<any> {
      return this._httpClient.get('/assets/Tags.json').pipe(catchError(this._errorService.handleError));
  }
  
}
