import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

import { AppService } from 'src/app/app.service';
import { PNAccessoriesService } from '../pNAccessories.service';
import { PNAccessory } from '../pNAccessory';
import { AdComments } from 'src/app/ad-comments';


@Component({
  selector: 'app-pNAccessorys-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.scss'
})
export class ViewComponent  implements OnInit {
  PNAccessory?: PNAccessory;
  PNAccessories?: PNAccessory[];
  AdID?: string;
  AdComments?: AdComments[];
  AdCommentsCount: number = 0;
  Views?: Number;

  constructor (
    private _pNAccessoriesService: PNAccessoriesService,
    private _formBuilder: FormBuilder,
    private _appService:  AppService,
    private _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._pNAccessoriesService.getPNAccessoryByID({ id: this._activatedRoute.snapshot.params['id'] }).subscribe((response: any) => {

      this.PNAccessory = response[0];
      this._pNAccessoriesService.getSimilarPNAccessories({ query: response[0].description }).subscribe((res: any) => {
        this.PNAccessories = res;
      });

      this._appService.getAdComments({ ad_id: response[0]._id })
        .subscribe((response: any) => {
          this.AdComments = response;
          this.AdCommentsCount = response.length;
        });

    });
  }


   newAdCommentForm = this._formBuilder.group({
    comment: ['', Validators.required ],
    ad_id: ['', Validators.required]
  });

  onSubmitAdComment(): void {
    this._appService.newAdComment({
      ad_id: this.newAdCommentForm.value.ad_id,
      comment: this.newAdCommentForm.value.comment,
      created_by:  'ksoldevtest@gmail.com'//window.sessionStorage.getItem('userId')
    }).subscribe((response: any) => {

    });
  }

  resetAdCommentForm(): void {
    this.newAdCommentForm.reset();
  }

  countViews(id: String) {
    this._appService.countAdViews({
      ad_id: id
     }).subscribe((response: any) => {

      const elem = document.getElementById(`view_${ id}`);

      if (elem) {
        elem.innerHTML = response;
      }
      return response;
     });
  }

}
