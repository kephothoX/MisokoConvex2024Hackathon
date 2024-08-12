import { Component, OnInit } from '@angular/core';


import { AuthnService } from '../authn.service';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.scss'
})
export class SigninComponent implements OnInit {

  constructor (
    private _authnService: AuthnService
  ) {}

  ngOnInit() {

    this._authnService.getAuthURL().subscribe((response: any) => {

      window.location.href = response;
    

    });    
  }

}
