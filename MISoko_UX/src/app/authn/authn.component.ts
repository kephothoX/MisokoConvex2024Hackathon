import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { AuthnService } from './authn.service';

import { AuthService } from '@auth0/auth0-angular';


@Component({
  selector: 'app-authn',
  templateUrl: './authn.component.html',
  styleUrls: ['./authn.component.scss'],
  providers: [ AuthService ]
})
export class AuthnComponent implements OnInit {
  User: any;
  isAuthenticated!: boolean;
  isAuthenticated$ = this._auth0Service.isAuthenticated$
  
  constructor (
    private  _auth0Service: AuthService,
    private _activatedRoute: ActivatedRoute,
    private _authnService: AuthnService,
    private _router: Router,
    ) {}

  ngOnInit(): void {
     const code = this._activatedRoute.snapshot.queryParams['code'];
    console.log(code);

    console.log(this._activatedRoute.snapshot.queryParams);

    this._authnService.genRefreshToken({ code: code }).subscribe((response: any) => {
      console.log(response);

      window.sessionStorage.setItem('accessToken', response.access_token);
      window.sessionStorage.setItem('refreshToken', response.refresh_token);

      this._router.navigate(['/home']);

    });
    
    this._auth0Service.user$.subscribe((response: any) => {
      
        window.sessionStorage.setItem('user', `${ JSON.stringify(response) }`);
      });
      this._auth0Service.isAuthenticated$.subscribe((response: any) => {

        window.sessionStorage.setItem('isAuthenticated', `${ response }`)
        this.isAuthenticated = response;
      });    

  }
}

@Component({
  selector: 'app-login',
  template: ``,
  providers: [ AuthService ]
})
export class LoginComponent implements OnInit{

  constructor(
    private _auth0Service: AuthService
  ) {}

  ngOnInit(): void {
    this._auth0Service.loginWithRedirect({
        appState: {
        target: '/PNAccessories',
      }
    });      
  } 
}

@Component({
  selector: 'app-signup',
  template: ``,
  providers: [ AuthService ]
})
export class SignUpComponent implements OnInit{

  constructor(
    private _auth0Service: AuthService,
     
  ) {}

  ngOnInit(): void {
   
    this._auth0Service.loginWithRedirect ({
      appState: {
        target: '/profile/new',
      },
      authorizationParams: {
        screen_hint: 'signup',
      },
    });      
  } 
}

@Component({
  selector: 'app-signup',
  template: ``,
  providers: [ AuthService ]
})
export class LogOutComponent implements OnInit{

  constructor(
    private _auth0Service: AuthService
  ) {}

  ngOnInit(): void {
    this._auth0Service.logout({
      logoutParams: {
        returnTo: 'https://MISoko.vercel.app/PNAccessories'
      },
    });      
  } 
}
