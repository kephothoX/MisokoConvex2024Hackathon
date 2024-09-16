import { Component, OnInit } from '@angular/core';

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

  User?: string | null | undefined = window.sessionStorage.getItem('user');
  Email: any;

  formData = new FormData();

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    //private _MISokoService: MISokoService,
    public _snackBar: MatSnackBar,
    public _matSnackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    
  }

  updateUser(): void {
    const user = JSON.parse(`${ window.sessionStorage.getItem('user')}`);
    this.Email = user['email'];

    this._router.navigate([`/authn/update/${ user['_id']}`]);
  }


  logOutUser() {
    this._router.navigate(['/authn/logout']);

  }

}
