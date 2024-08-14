import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { CdkTextareaAutosize } from '@angular/cdk/text-field';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AutoMobilesService } from '../../autoMobiles/autoMobiles.service';

import { AutoMobile, AutoMobileMake } from '../../autoMobiles/autoMobiles';
import { Design } from 'src/app/canva/canva';
import { take } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country';
import { CanvaService } from 'src/app/canva/canva.service';
import { AppService } from 'src/app/app.service'

import * as moment from 'moment';

@Component({
  selector: 'app-update-AutoMobile',
  templateUrl: './updateAutoMobile.component.html',
  styleUrl: './updateAutoMobile.component.scss'
})
export class UpdateAutoMobileComponent {
  formData = new FormData();
  imageURLs = new Array();
  adImages = new Array();

  Designs?: Design[];
  PreviewURL: any;
  ErrMsg: String= '';
  AutoMobile?: AutoMobile;
  AutoMobileMakes?: AutoMobileMake[];
  AutoMobileTransmission: String[] = ['MANUAL', 'AUTOMATIC'];
 

  @ViewChild('autosize') autosize!:  CdkTextareaAutosize;

  constructor(
    private _formBuilder: FormBuilder,
    private _appService: AppService,
    private _canvaService: CanvaService,
    private _autoMobilesService: AutoMobilesService,
    private _ngZone: NgZone,
    public _snackBar: MatSnackBar,
  ) { }

  triggerResize() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this.autosize.resizeToFitContent(true);
    });
  }

  ngOnInit() {
    this._autoMobilesService.getAutoMobilesMakes().subscribe((response: any) => {
      this.AutoMobileMakes = response.Makes;
    });

   
  }


  updateAutoMobileForm  = this._formBuilder.group({
    make: ['', Validators.required],
    model: ['', Validators.required],
    yom: ['', Validators.required],
    key_features: ['', Validators.required],
    chassis: ['', Validators.required],
    engine: ['', Validators.required],
    transmission: ['', Validators.required],
    price_amount: ['', Validators.required],
    body_color: ['', Validators.required],
    description: ['', Validators.required],
    video_link: ['', Validators.required],
    images: ['', Validators.required],
    interior_color: ['', Validators.required],
    location: ['', Validators.required],
    ad_phone_number: ['', Validators.required],
    ad_email: ['', Validators.required]
  });


  onSubmit() {
    const formValues = this.updateAutoMobileForm.value;

   
      this.formData.append('make', `${ formValues.make }`),
      this.formData.append('model', `${  formValues.model}`),
      this.formData.append('yom', `${  formValues.yom}`),
      this.formData.append('key_features', `${  formValues.key_features}`),
      this.formData.append('chassis', `${  formValues.chassis}`),
      this.formData.append('engine', `${  formValues.engine}`),
      this.formData.append('transmission', `${  formValues.transmission}`),
      this.formData.append('price_amount', `${  formValues.price_amount}`),
      this.formData.append('body_color', `${  formValues.body_color}`),
      this.formData.append('description', `${  formValues.description}`),
      this.formData.append('video_link', `${  formValues.video_link}`),    
      this.formData.append('interior_color', `${  formValues.interior_color}`),
      this.formData.append('created_by', `${  window.sessionStorage.getItem('canvaUserID')}`)
      this.formData.append('location', `${ formValues.location }`);
      this.formData.append('ad_phone_number', `${ formValues.ad_phone_number }`);
      this.formData.append('ad_email', `${ formValues.ad_email }`);


    this._autoMobilesService.newAutoMobile(this.formData).subscribe((response: any) => {
      console.log(response);

      this._snackBar.open(response.response, 'Close');
    });
  }

  resetForm() {
    this.updateAutoMobileForm.reset();
  }

  formatDate(date: any) {
    return moment(date).format('DD/MM/YYYY');
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

