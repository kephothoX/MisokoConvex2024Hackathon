import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators  } from '@angular/forms';

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


import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-my-ADs',
  templateUrl: './myADs.component.html',
  styleUrl: './myADs.component.scss'
})
export class MyADsComponent implements OnInit {
  ENAppliances?: ENAppliance[];
  SNIndustries?: SNIndustry[];
  AutoMobiles?: AutoMobile[];
  LNProperties?: LNProperty[];
  PNAccessories?: PNAccessory[];

  constructor (
    private _formBuilder:  FormBuilder,
    private _eNAppliancesService: ENAppliancesService,
    private _sNIndustriesService: SNIndustryService,
    private _autoMobilesService: AutoMobilesService,
    private _lNPropertiesService: LNPropertiesService,
    private _pNAccessoriesService: PNAccessoriesService,
    public _matSnackBar: MatSnackBar,

  ) {}

  ngOnInit(): void {

    this.loadENAppliances();

    this.loadAutoMobiles();

    this.loadLNProperties();

    this.loadPNAccessories();

    this.loadSNIndustries();
    
  }

  loadENAppliances() {
    this._eNAppliancesService.getAllENAppliances().subscribe((response: any) => {
      this.ENAppliances = response;
    });
  }

  loadSNIndustries() {
    this._sNIndustriesService.getAllSNIndustries().subscribe((response: any) => {
      this.SNIndustries = response;
    });
  }

  loadPNAccessories() {
    this._pNAccessoriesService.getAllPNAccessories().subscribe((response: any) => {
      this.PNAccessories = response;
    });
  }

  loadLNProperties() {
    this._lNPropertiesService.getAllLNProperties().subscribe((response: any) => {
      this.LNProperties = response;
    });
  }

  loadAutoMobiles() {
    this._autoMobilesService.getAllAutoMobiles().subscribe((response: any) => {
      this.AutoMobiles = response;
    });
  }

}
