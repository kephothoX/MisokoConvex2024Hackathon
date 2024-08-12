import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { LNPropertiesService } from '../lNProperties.service';
import { LNProperty } from '../lNProperty';

@Component({
  selector: 'app-lNPropertys-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  LNProperty?: LNProperty;

  constructor (
    private _lNPropertiesService: LNPropertiesService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {    
    this._lNPropertiesService.getLNPropertyByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {

      this.LNProperty = response[0];
    });
   }

}
