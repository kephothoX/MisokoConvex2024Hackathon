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

  accountEmail?: string | null | undefined = window.sessionStorage.getItem('email');

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


  logOutUser() {
    this._router.navigate(['/authn/logout']);

  }

}
