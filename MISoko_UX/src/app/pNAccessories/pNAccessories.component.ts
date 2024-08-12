import { Component, OnInit } from '@angular/core';


import { PNAccessory } from './pNAccessory';
import { PNAccessoriesService } from './pNAccessories.service';

@Component({
  selector: 'app-pNAccessories',
  templateUrl: './pNAccessories.component.html',
  styleUrl: './pNAccessories.component.scss'
})
export class PNAccessoriesComponent implements OnInit {
  PNAccessories?: PNAccessory[];


  constructor (
    private _pNAccessoriesService: PNAccessoriesService
  ) {}

  ngOnInit(): void {
      this._pNAccessoriesService.getAllPNAccessories().subscribe((response: any) => {
        this.PNAccessories = response;
      });
  }

}
