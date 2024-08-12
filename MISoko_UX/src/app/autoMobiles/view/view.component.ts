import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AutoMobilesService } from '../autoMobiles.service';
import { AutoMobile } from '../autoMobiles';

@Component({
  selector: 'app-eNAppliances-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  AutoMobile?: AutoMobile;

  constructor (
    private _autoMobilesService: AutoMobilesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this._autoMobilesService.getAutoMobileByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {

      this.AutoMobile = response[0];
    })
   }

}
