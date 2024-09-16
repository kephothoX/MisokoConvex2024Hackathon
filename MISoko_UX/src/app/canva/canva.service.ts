import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from 'src/environments/environment.prod';
import { Router } from '@angular/router';
import { AuthnService } from '../authn/authn.service';

import { ErrorService } from '../error/error.service';
import { Observable, catchError, of } from 'rxjs';

import { AppService } from '../app.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CanvaService {

  constructor(
    private _errorService: ErrorService,
    private _appService: AppService,
    private _httpClient: HttpClient,
    private _router: Router,
    private _authnService: AuthnService,
    public _matSnackBar: MatSnackBar
  ) { }

  InitializeCanva(): void {
    if (window.sessionStorage.getItem('refreshToken') == 'undefined' || window.sessionStorage.getItem('refreshToken') == null || window.sessionStorage.getItem('refreshToken') == undefined) {
      this._router.navigate(['/authn/canva/signin']);

    } else {
      this._authnService.inspectAccessToken({ accessToken: window.sessionStorage.getItem('accessToken') }).subscribe((response: any) => {

        if (Boolean(response.active) === false) {
          this._authnService.genAccessToken({ refreshToken: window.sessionStorage.getItem('accessToken') }).subscribe((res: any) => {

            if (res == null || res == undefined) {
              this._router.navigate(['authn/canva/signin']);
            } else {
              window.sessionStorage.setItem('accessToken', res.access_token);
              window.sessionStorage.setItem('refreshToken', res.refresh_token);

              //this._router.navigate([`${window.localStorage.getItem('redirectTo')}`]);

            }
          });
        } else {

          this.getUserProfile({ accessToken: window.sessionStorage.getItem('accessToken') }).subscribe((res: any) => {

            window.sessionStorage.setItem('displayName', `${res.profile.display_name}`);

            this._matSnackBar.open(`You are Logged in as ${res.profile.display_name}`, 'Dismiss');

            //this._router.navigate([`${window.localStorage.getItem('redirectTo')}`]);

          });

          this.getUserID({ accessToken: window.sessionStorage.getItem('accessToken') }).subscribe((res: any) => {

            window.sessionStorage.setItem('canvaUserID', `${res.team_user.user_id}`);
            window.sessionStorage.setItem('canvaTeamID', `${res.team_user.team_id}`);

            //this._router.navigate([`${window.localStorage.getItem('redirectTo')}`]);

          });
        }
      });
    }
  }


  getUserID(data: Object): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/canva/user`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getUserProfile(data: Object): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/canva/user/profile`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


  uploadAsset(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/assets/new`, data).pipe(catchError(this._errorService.handleError));
  };

  getAssets(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/assets`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  geminiAsset(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/gemini-asset`, data).pipe(catchError(this._errorService.handleError));
  };

  newCanvaDesign(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/designs/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaBrandTemplates(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/templates`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaAssets(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/assets`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaAsset(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/asset`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateCanvaAsset(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/asset/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  deleteCanvaAsset(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/asset/delete`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  createNewFolder(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folders/new`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  updateFolder(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folders/update`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  deleteFolder(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folders/delete`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaFolders(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folders`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaFolder(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folder`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaFolderItems(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/folder/items`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaDesigns(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/designs`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }

  getCanvaDesign(data: any): Observable<any> {
    return this._httpClient.post(`${this._appService.APIEndpoint}/design`, data, this._appService.httpOptions).pipe(catchError(this._errorService.handleError));
  }


}
