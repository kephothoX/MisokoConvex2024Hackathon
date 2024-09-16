import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { SNIndustryService } from '../sNIndustry.service';
import { SNIndustry } from '../sNIndustry';

@Component({
  selector: 'app-sNIndustry-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  SNIndustry?: SNIndustry;
  SNIndustries?: SNIndustry[];

  constructor (
    private _sNIndustryService: SNIndustryService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this._sNIndustryService.getSNIndustryByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {

      this.SNIndustry = response[0];
      this._sNIndustryService.getSimilarSNIndustries({ query: response[0].description }).subscribe((res: any) => {
        this.SNIndustries = res;
      });
    });
   }

}
