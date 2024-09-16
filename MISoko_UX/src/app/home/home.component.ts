import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ENAppliancesService } from '../eNAppliances/eNAppliances.service';
import { AutoMobilesService } from '../autoMobiles/autoMobiles.service';
import { SNIndustryService } from '../sNIndustry/sNIndustry.service';
import { LNPropertiesService } from '../lNProperties/lNProperties.service';
import { PNAccessoriesService } from '../pNAccessories/pNAccessories.service';
import { ENAppliance } from '../eNAppliances/eNAppliance';
import { AutoMobile } from '../autoMobiles/autoMobiles';
import { LNProperty } from '../lNProperties/lNProperty';
import { SNIndustry } from '../sNIndustry/sNIndustry';
import { PNAccessory } from '../pNAccessories/pNAccessory';

import { HomeService } from './home.service'




import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  ENAppliances?: ENAppliance[];
  SNIndustries?: SNIndustry[];
  AutoMobiles?: AutoMobile[];
  LNProperties?: LNProperty[];
  PNAccessories?: PNAccessory[];


  constructor (
    private _homeService: HomeService,
    private _eNAppliancesService: ENAppliancesService,
    private _sNIndustriesService: SNIndustryService,
    private _autoMobilesService: AutoMobilesService,
    private _lNPropertiesService: LNPropertiesService,
    private _pNAccessoriesService: PNAccessoriesService,
    private _router: Router,
    public _matSnackBar: MatSnackBar,
  ) {}


  ngOnInit(): void {
    this.getENAppliances();
    
    this.getPNAccessories();
  }


  ngOnSubmit(value: string) {
    this._router.navigate([`/home/search/${value}`]);
    
  }

  getENAppliances() {
    this._eNAppliancesService.getENAppliances().subscribe((response: any) => {
      this.ENAppliances = response;
    });
  }

  getPNAccessories() {
    this._pNAccessoriesService.getPNAccessories().subscribe((response: any) => {
      this.PNAccessories = response;
    });
  }

  getLNProperties() {
    this._lNPropertiesService.getLNProperties().subscribe((response: any) => {
      this.LNProperties = response;
    });
  }

  getSNIndustry() {
    this._sNIndustriesService.getSNIndustries().subscribe((response: any) => {
      this.SNIndustries = response;
    });
  }

  getAutoMobiles() {
    this._autoMobilesService.getAutoMobiles().subscribe((response: any) => {
      this.AutoMobiles = response;
    });
  }

  

}
