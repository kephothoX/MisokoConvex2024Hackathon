import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ENAppliancesService } from '../../eNAppliances/eNAppliances.service';
import { AutoMobilesService } from '../../autoMobiles/autoMobiles.service';
import { SNIndustryService } from '../../sNIndustry/sNIndustry.service';
import { LNPropertiesService } from '../../lNProperties/lNProperties.service';
import { PNAccessoriesService } from '../../pNAccessories/pNAccessories.service';
import { ENAppliance } from '../../eNAppliances/eNAppliance';
import { AutoMobile } from '../../autoMobiles/autoMobiles';
import { LNProperty } from '../../lNProperties/lNProperty';
import { SNIndustry } from '../../sNIndustry/sNIndustry';
import { PNAccessory } from '../../pNAccessories/pNAccessory';

import { HomeService } from './../home.service'




import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent implements OnInit {
  ENAppliances?: ENAppliance[];
  SNIndustries?: SNIndustry[];
  AutoMobiles?: AutoMobile[];
  LNProperties?: LNProperty[];
  PNAccessories?: PNAccessory[];


  constructor (
    private _homeService: HomeService,
    private _activatedRoute: ActivatedRoute,
    public _matSnackBar: MatSnackBar,
  ) {}


  ngOnInit(): void {
    const params = this._activatedRoute.snapshot.params['searchTerm'];

    this._homeService.searchPNAccessories({
      searchTerm: params
    }).subscribe((response: any) => {
      this.PNAccessories = response;
    });

    this._homeService.searchAutoMobiles({
      searchTerm: params
    }).subscribe((response: any) => {
      this.AutoMobiles = response;
    });

    this._homeService.searchENAppliances({
      searchTerm: params
    }).subscribe((response: any) => {
      this.ENAppliances = response;
    });

    this._homeService.searchLNProperties({
      searchTerm: params
    }).subscribe((response: any) => {
      this.LNProperties = response;
    });

    this._homeService.searchSNIndustries({
      searchTerm: params
    }).subscribe((response: any) => {
      this.SNIndustries = response;
    });
     
 
  }

}
