import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './app.service';
import { AuthService } from '@auth0/auth0-angular';

//import { MISokoService } from './sNIndustry/MISoko.service';

import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MISoko';


  constructor(
    private _appService: AppService,
    private _auth0Service: AuthService,
    //private _MISokoService: MISokoService,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
    if (window.sessionStorage.getItem('isAuthenticated') == 'false') {
      this._auth0Service.isAuthenticated$.subscribe((response: any) => {

      window.sessionStorage.setItem('isAuthenticated', `${response}`)
    });
    this._auth0Service.user$.subscribe((response: any) => {
      window.sessionStorage.setItem('user', `${JSON.stringify(response)}`);

      /*if (response.length >= 1) {
        this._MISokoService.getUser({ email: window.sessionStorage.getItem('email') }).subscribe((response: any) => {
          window.sessionStorage.setItem('userId', `${response[0]['_id']}`);

          window.sessionStorage.setItem('cvxUser', `${JSON.stringify(response[0])}`);
        });

        window.sessionStorage.setItem('email', `${response.email}`);
        window.sessionStorage.setItem('email_verified', `${response.email_verified}`);
        window.sessionStorage.setItem('name', `${response.given_name} ${response.family_name}`);
        window.sessionStorage.setItem('username', `${response.nickname}`);

        window.sessionStorage.setItem('isLoggedIn', 'true');

        this._matSnackBar.open(`Welcome ${response.name}`, 'Dismiss');

        this._MISokoService.getUserProfileByEmail({
          email: response.email
        }).subscribe((res: any) => {
          if (res.length >= 1) {
            console.log('res length: ', res.length)
            this._router.navigate(['/PNAccessories']);
          } else {
            this._router.navigate(['/profile/new']);
          }
        });

      } else {
        this._matSnackBar.open('Login to Continue.', 'Dismiss');
        this._router.navigate(['/authn/login']);
      }*/
    });
  }

  
  }

}
