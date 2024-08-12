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

  
  constructor (
    private _activatedRoute: ActivatedRoute,
    private _authnService: AuthnService,
    private _router: Router,
    ) {}

  ngOnInit(): void {
     const code = this._activatedRoute.snapshot.queryParams['code'];
    console.log(this._activatedRoute.snapshot.queryParams);

    this._authnService.genRefreshToken({ code: code }).subscribe((response: any) => {
      console.log(response);

      window.sessionStorage.setItem('accessToken', response.access_token);
      window.sessionStorage.setItem('refreshToken', response.refresh_token);

      this._router.navigate(['/home']);

    });
    
  }
}

