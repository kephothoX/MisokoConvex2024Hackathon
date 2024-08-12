import { Component, OnInit } from '@angular/core';

import { SNIndustry } from './sNIndustry';
import { SNIndustryService } from './sNIndustry.service';

@Component({
  selector: 'app-sNIndustry',
  templateUrl: './sNIndustry.component.html',
  styleUrl: './sNIndustry.component.scss'
})
export class SNIndustryComponent implements OnInit {
  SNIndustries?: SNIndustry[];

  constructor (
    private _sNIndustriesService: SNIndustryService
  ) {}

  ngOnInit(): void {
      this._sNIndustriesService.getAllSNIndustries().subscribe((response: any) => {
        this.SNIndustries = response;
      });
  }

}
