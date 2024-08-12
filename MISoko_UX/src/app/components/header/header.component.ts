import { Component, OnInit } from '@angular/core';

import { AuthService } from '@auth0/auth0-angular';

import { ActivatedRoute, Router } from '@angular/router';
//import { MISokoService } from 'src/app/sNIndustry/MISoko.service';

import { UserProfile } from 'src/app/interfaces/user-profile';
//import { MISokoAIComponent } from '../MISoko-ai/MISoko-ai.component';

import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  title?: String;
  profileId?: String;
  userProfile!: UserProfile;
  imageURL!: String;

  accountEmail?: string | null | undefined = window.sessionStorage.getItem('email');

  formData = new FormData();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    //private _MISokoService: MISokoService,
    public _snackBar: MatSnackBar,
    private _auth0Service: AuthService,
    public _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    if (window.sessionStorage.getItem('isAuthenticated') == null || undefined ||  'undefined'|| 'false' || false && window.sessionStorage.getItem('userId') == null || undefined) {
      this._auth0Service.isAuthenticated$.subscribe((response: any) => {

        window.sessionStorage.setItem('isAuthenticated', `${response}`);
      });        
    }
    this.title = this._activatedRoute.snapshot.routeConfig?.title?.toString();
    /*if (window.sessionStorage.getItem('profileId') != null || undefined || 'undefined') {
      this._MISokoService.getUserProfileByEmail({ email: window.sessionStorage.getItem('email') }).subscribe((response: any) => {

        if (response.length >= 1) {
          this.userProfile = response[0];
          this.profileId = response[0]._id;

          if (response[0].profile_thumbnail != null) {
            this.imageURL = response[0].profile_thumbnail;
          } else {
            this.imageURL = response[0].social_image_url;
          }
        }
      });
    }*/
  }


  logOutUser() {
    this._router.navigate(['/authn/logout']);

  }

}
