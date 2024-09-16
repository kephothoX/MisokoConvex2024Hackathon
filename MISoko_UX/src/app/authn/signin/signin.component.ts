import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthnService } from '../authn.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  constructor (
    private _authnService: AuthnService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {}


  ngOnInit(): void {
    this._authnService.getAuthURL().subscribe((response: any) => {

      window.location.href = response;
    });

  }

}
