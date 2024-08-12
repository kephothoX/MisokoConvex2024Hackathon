import { Component, OnInit } from '@angular/core';

import { LNProperty } from './lNProperty';
import { LNPropertiesService } from './lNProperties.service';


@Component({
  selector: 'app-lNProperties',
  templateUrl: './lNProperties.component.html',
  styleUrl: './lNProperties.component.scss'
})
export class LNPropertiesComponent implements OnInit {
  LNProperties?: LNProperty[];

  constructor (
    private _lNPropertiesService: LNPropertiesService
  ) {}


  ngOnInit(): void {
      this._lNPropertiesService.getAllLNProperties().subscribe((response: any) => {
        this.LNProperties = response;
      })
  }


}
