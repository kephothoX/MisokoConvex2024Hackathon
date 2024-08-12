import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './app.service';

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
    //private _MISokoService: MISokoService,
    private _router: Router,
    public _matSnackBar: MatSnackBar
  ) { }


  ngOnInit(): void {
   
  }

}
