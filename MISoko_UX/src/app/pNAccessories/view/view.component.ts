import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { PNAccessoriesService } from '../pNAccessories.service';
import { PNAccessory } from '../pNAccessory';

@Component({
  selector: 'app-pNAccessorys-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  PNAccessory?: PNAccessory;

  constructor (
    private _pNAccessoriesService: PNAccessoriesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this._pNAccessoriesService.getPNAccessoryByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {

      this.PNAccessory = response[0];

    })
   }

}
