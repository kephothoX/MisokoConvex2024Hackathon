import { Component, OnInit } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Design } from 'src/app/canva/canva';
import { CanvaService } from 'src/app/canva/canva.service';

import { PNAccessory } from 'src/app/pNAccessories/pNAccessory';

import { PNAccessoriesService } from 'src/app/pNAccessories/pNAccessories.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-update-PNAccessory',
  templateUrl: './updatePNAccessory.component.html',
  styleUrl: './updatePNAccessory.component.scss'
})
export class UpdatePNAccessoryComponent implements OnInit {
  PNAccessory?: PNAccessory;
  formData = new FormData();
  imageURLs = new Array();
  adImages = new Array();

  Designs?: Design[];
  PreviewURL: any;
  ErrMsg: String= '';


  constructor (
    private _formBuilder: FormBuilder,
    private _pNAccessoriesService: PNAccessoriesService,
    private _canvaService: CanvaService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    public _matSnackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
      window.localStorage.setItem('redirectTo', `${ this._router.url }`);

      this._pNAccessoriesService.getPNAccessoryByID({ id: `${ this._activatedRoute.snapshot.params['id'] }`}).subscribe((response: any) => {
        
        this.PNAccessory = response[0];
        console.log(this.PNAccessory);
      });
  }


  updatePNAccessoryForm = this._formBuilder.group({
    name: ['', Validators.required],
    description: ['', Validators.required],
    specifications: ['', Validators.required],
    price_amount: ['', Validators.required],
    video_link: ['', Validators.required],
    location: ['', Validators.required],
    ad_phone_number: ['', Validators.required],
    ad_email: ['', Validators.required]
  });


  ngOnSubmit() {
    const formValues = this.updatePNAccessoryForm.value;


    this.formData.append('name', `${ formValues.name }`);
    this.formData.append('description', `${ formValues.description }`);
    this.formData.append('price_amount', `${ formValues.price_amount }`);
    this.formData.append('video_link', `${ formValues.video_link }`);
    this.formData.append('created_by', `${ window.sessionStorage.getItem('canvaUserID') }`);
    this.formData.append('location', `${ formValues.location }`);
    this.formData.append('ad_phone_number', `${ formValues.ad_phone_number }`);
    this.formData.append('ad_email', `${ formValues.ad_email }`);

    for (var x = 0; x < this.adImages.length; x++) {

        this.formData.append("ad_images[]", this.adImages[x]);
        this.imageURLs.push(URL.createObjectURL(this.adImages[x]));
    }

    this._pNAccessoriesService.newPNAccessory(this.formData).subscribe((response: any) => {
      if(response != null || response != undefined ) {
        this._matSnackBar.open(`AD with id ${ response } cerated Successfully`, 'Dismiss');
      }
    });
 
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {

      const _files = event.target.files;

      if (_files.length < 7) {
        this.ErrMsg = "Must Upload 7 AD Images"
      } else if (_files.length > 7) {
        this.ErrMsg = "Only 7 AD Images Required."
      }


      for (var x = 0; x < _files.length; x++) {

        this.formData.append("ad_images[]", _files[x]);
        this.imageURLs.push(URL.createObjectURL(_files[x]));
      }
    }
  }



  resetForm(): void {
    this.updatePNAccessoryForm.reset();
  }

  getCanvaDesigns(): void {
    this._canvaService.InitializeCanva();
    
    this._canvaService.getCanvaDesigns({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
    }).subscribe((res: any) => {
      this.Designs = res.items;
    });

  }

  getCanvaDesign(id: String): void {
    this._canvaService.InitializeCanva();

    
    this._canvaService.getCanvaDesign({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      designID: id,
    }).subscribe((res: any) => {
      
    })

  }

  previewDesign(url: String): void {
    this.PreviewURL = url;

  }

  async uploadDesign(url: String) {

    const getUrlExtension = (url: any) => {
      return url
        .split(/[#?]/)[0]
        .split(".")
        .pop()
        .trim();
    }

    const onImageEdit = async (imgUrl: any) => {
      var imgExt = getUrlExtension(imgUrl);

      const response = await fetch(imgUrl);
      const blob = await response.blob();
      const file = new File([blob], "adImage." + imgExt, {
        type: blob.type,
      });

      this.adImages.push(file);
    }

    onImageEdit(url);
  }

  continueEditingOnCanva(url: String): void {
    window.location.href = `${ url }`;

  }

  viewOnCanva(url: String): void {
    window.location.href = `${ url }`;
  }

}
