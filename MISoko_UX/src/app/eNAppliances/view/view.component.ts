import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ENAppliancesService } from '../eNAppliances.service';
import { ENAppliance } from '../eNAppliance';

@Component({
  selector: 'app-eNAppliances-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  ENAppliance?: ENAppliance;

  constructor (
    private _eNAppliancesService: ENAppliancesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this._eNAppliancesService.getENApplianceByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {
      console.log(response);

      this.ENAppliance = response[0];
      console.log(this.ENAppliance);
    })
   }

}
