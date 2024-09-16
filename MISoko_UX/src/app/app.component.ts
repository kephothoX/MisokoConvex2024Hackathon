import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { AppService } from './app.service';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

import { MatSnackBar } from '@angular/material/snack-bar';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'MISoko';

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge']
  ]);


  constructor(
    private _appService: AppService,
    private _router: Router,
    public _matSnackBar: MatSnackBar,
    _breakpointObserver: BreakpointObserver
    ){
          _breakpointObserver.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
    }


  ngOnInit(): void {
   
  }

}
