import { Component, OnInit } from '@angular/core';

import { AutoMobile } from './autoMobiles';
import { AutoMobilesService } from './autoMobiles.service';
@Component({
  selector: 'app-autoMobiles',
  templateUrl: './autoMobiles.component.html',
  styleUrl: './autoMobiles.component.scss'
})
export class AutoMobilesComponent implements OnInit{
  AutoMobiles?: AutoMobile[];

  constructor (
    private _autoMobilesService: AutoMobilesService
  )  {}

  ngOnInit(): void {
      this._autoMobilesService.getAllAutoMobiles().subscribe((response: any) => {
        this.AutoMobiles = response;
      });
  }



}


