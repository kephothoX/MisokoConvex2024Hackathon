import { Component, OnInit } from '@angular/core';

import { ENAppliancesService } from './eNAppliances.service';
import { ENAppliance } from './eNAppliance';

@Component({
  selector: 'app-eNAppliances',
  templateUrl: './eNAppliances.component.html',
  styleUrl: './eNAppliances.component.scss'
})
export class ENAppliancesComponent implements OnInit {
  ENAppliances?: ENAppliance[];

  constructor (
    private _eNAppliancesService: ENAppliancesService
  ) {}

  ngOnInit(): void {
    this._eNAppliancesService.getAllENAppliances().subscribe((response: any) => {
      this.ENAppliances = response;
    })
      
  }
  

}
