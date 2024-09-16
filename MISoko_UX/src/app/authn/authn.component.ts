import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { AuthnService } from './authn.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-authn',
  templateUrl: './authn.component.html',
  styleUrls: ['./authn.component.scss'],
})
export class AuthnComponent {


  constructor (
    private _authnService: AuthnService,
    private _activatedRoute: ActivatedRoute,
    private _formBuilder: FormBuilder,
    private _router: Router,
    public  _matSnackBar: MatSnackBar
    ) {}


  ngOnSubmit(): void {
    window.sessionStorage.setItem('email', `${ this.authEmailForm.value.email }`);
    this._authnService.getUserWithEmail({
      email: this.authEmailForm.value.email
    }).subscribe((response) => {
      if (response.length > 0) {
        window.sessionStorage.setItem('user', JSON.stringify(response[0]));

        this._authnService.ifUserAuthenticated({
          id: response[0]._id
        }).subscribe((authRes: any) => {
          this._matSnackBar.open(`${ authRes }`, 'Dismiss');
        });

      } else {
        this._matSnackBar.open('SignIn/SignUp to Continue....', 'Dismiss');
      }     
    });
  }

  authEmailForm = this._formBuilder.group({
    email: ['', Validators.required ],
    password: ['', Validators.required]
  });

  signInWithPassword(): void {
    this._authnService.signIn({
      flow: "signIn",
      provider: "password"      
    }).subscribe((response: any) => {
      
    });
  }

  signInWithGoogle(): void {
    this._authnService.signIn({
      params: {},
      provider: "google",
      refreshToken: "",
      verifier: "",
    }).subscribe((response: any) => {
      window.location.href = response.redirect;
    })
  }


  signInWithGithub(): void {
    this._authnService.signIn({
      params: {},
      provider: "github",
      refreshToken: "",
      verifier: "",
    }).subscribe((response: any) => {
      window.location.href = response.redirect;
    })
  }

  signInWithGitlab(): void {
    this._authnService.signIn({
      params: {},
      provider: "gitlab",
      refreshToken: "",
      verifier: "",
    }).subscribe((response: any) => {
      window.location.href = response.redirect;
    })
  }
}

