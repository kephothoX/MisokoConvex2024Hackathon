import { Component, OnInit, NgZone, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatSnackBar } from '@angular/material/snack-bar';
import { AutoMobilesService } from '../autoMobiles.service';

import { AutoMobile, AutoMobileMake } from '../autoMobiles';

import { Design } from 'src/app/canva/canva';
import { CanvaService } from 'src/app/canva/canva.service';
import { AppService } from 'src/app/app.service';
import { take } from 'rxjs/operators';
import { Country } from 'src/app/interfaces/country';


import * as moment from 'moment';


@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit{
  formData = new FormData();
  AIResponse?: string;
  imageURLs = new Array();
  adImages = new Array();
  AdImages = new Array();
  VideoURL: any;
  ADVideo: any;
  DisableFileUploadForm: boolean = true;
  VideoStorageID: any;


  Designs?: Design[];
  PreviewURL: any;
  ErrMsg: String= '';
  AutoMobile?: AutoMobile;
  AutoMobileMakes?: AutoMobileMake[];
  AutoMobileTransmission: String[] = ['MANUAL', 'AUTOMATIC'];
 


  constructor(
    private _formBuilder: FormBuilder,
    private _appService: AppService,
    private _canvaService: CanvaService,
    private _router: Router,
    private _autoMobilesService: AutoMobilesService,
    private _ngZone: NgZone,
    public _matSnackBar: MatSnackBar,
  ) { }


  ngOnInit() {
    this._autoMobilesService.getAutoMobilesMakes().subscribe((response: any) => {
      this.AutoMobileMakes = response.Makes;
    });

   
  }


  newAutoMobileForm  = this._formBuilder.group({
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
    interior_color: ['', Validators.required],
    location: ['', Validators.required],
    ad_phone_number: ['', Validators.required],
    ad_email: ['', Validators.required]
  });


  ngOnSubmit(): void {
    const formValues = this.newAutoMobileForm.value;
    const ADImages = new Array();
    for (let x = 0; x < this.AdImages.length; x++) {
      this._appService.uploadFile(this.AdImages[x]).subscribe((response: any) => {
        if (response.fileStorageID != null || undefined) {
          ADImages.push(response.fileURL);
        }
      });
    }
    this._appService.uploadFile(this.ADVideo).subscribe((response: any) => {
      this.VideoStorageID = response.fileStorageID;

      if (response.fileStorageID != null || undefined) {

        const autoMobile = {
          make: `${formValues.make}`,
          model: `${formValues.model}`,
          yom: `${formValues.yom}`,
          key_features: `${formValues.key_features}`,
          chassis: `${formValues.chassis}`,
          engine: `${formValues.engine}`,
          transmission: `${formValues.transmission}`,
          price_amount: `${formValues.price_amount}`,
          body_color: `${formValues.body_color}`,
          description: `${formValues.description}`,
          video_link: `${response.fileURL}`,
          interior_color: `${formValues.interior_color}`,
          created_by: `${window.sessionStorage.getItem('canvaUserID')}`,
          location: `${formValues.location}`,
          ad_phone_number: `${formValues.ad_phone_number}`,
          ad_email: `${formValues.ad_email}`
        }

        this._autoMobilesService.newAutoMobile(autoMobile).subscribe((response: any) => {
          alert('Dont Reload. Wait  As We Save AD. We Got You.......');
          if (response != null || response != undefined) {
            this._matSnackBar.open(`AD with id ${response} created Successfully`, 'Dismiss');

            if (response) {
              this._router.navigate([`/autoMobiles/view/${response}`])
            }
          }
        });

      }
    });
  }

  resetForm() {
    this.newAutoMobileForm.reset();
  }

  formatDate(date: any) {
    return moment(date).format('DD/MM/YYYY');
  }

  
  onVideoUpload(event: any) {
    if (event.target.files && event.target.files.length) {

      const file = event.target.files[0];

      if (file.size > 5240000) {
        this._matSnackBar.open('File too big. Must be less than 5MB', 'Dismiss');
        this.DisableFileUploadForm = true;

      } else {
        this.DisableFileUploadForm = false;
        this.ADVideo = new Blob([file],  { type: `${ file.type }`});
        this.VideoURL = URL.createObjectURL(file);
      }      
    }
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
        this.AdImages.push( new Blob([_files[x]],  { type: `${ _files[x].type }`}));
        this.imageURLs.push(URL.createObjectURL(_files[x]));
      }
    }
  }

  removeAdImages(): void {
    this.AdImages = [];
    this.imageURLs = [];
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

  generateAIContent(make: string, model: string, yom: string, keyFeatures: string, chassis: string, engine: string,  bodyColor: string) {
    this._appService.generateAIContent({
      prompt: `generate automobile description of ${make}, ${model}, ${yom} based on ${keyFeatures}, ${chassis}, ${engine},  ${bodyColor} format result as text.`
    }).subscribe((response: any) => {
      this.AIResponse = response;
    })
  }  

}
