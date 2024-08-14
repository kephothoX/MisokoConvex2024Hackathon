import { Component, OnInit, Inject } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthnService } from '../authn/authn.service';
import { AppService } from '../app.service';

import { CanvaService } from '../canva/canva.service';
import { Folder, Design, FolderQ, CanvaFolder, FolderE, FolderItem, CanvaAsset, Asset, AssetQ } from './canva';


import {MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-canva',
  templateUrl: './canva.component.html',
  styleUrl: './canva.component.scss'
})
export class CanvaComponent implements OnInit {
  formData = new  FormData();
  Folders?: Folder[];
  Designs?: Design[];
  PreviewURL: any;
  Folder?: Folder;
  CanvaAssets?: CanvaAsset[];


  constructor (
    private _authnService: AuthnService,
    private _appService: AppService,
    private _formBuilder: FormBuilder,
    private _router: Router,
    private _canvaService: CanvaService,
    public _matSnackBar: MatSnackBar,
    private _matDialog: MatDialog
  ) {}


  ngOnInit(): void {
    this._canvaService.InitializeCanva();
  }

  continueEditingOnCanva(url: String): void {
    window.location.href = `${ url }`;

  }

  exitCanva(): void{
    this._authnService.revokeRefreshToken({
      refreshToken: `${ window.sessionStorage.getItem('refreshToken')}`
    }).subscribe((response: any) => {
      this._router.navigate(['/home']);
    });
  }

  viewOnCanva(url: String): void {
    window.location.href = `${ url }`;
  }


  newFolderDialog() {
    this._matDialog.open(NewFolderDialog);
  }


  folderInfoDialog(folder: any) {
    console.log(folder);
    this._matDialog.open(
      FolderInfoDialog,
      {
        data: {
          folder: folder
        }
      }    
    );
  }

  ngOnSubmit() {
    this.formData.append('accessToken', `${ window.sessionStorage.getItem('accessToken') }`);


    this._canvaService.uploadAsset(this.formData).subscribe((response: any) => {
      console.log(response);
    })
  }

  onFileChange(event: any) {
    if (event.target.files && event.target.files.length) {
      this.formData.append('canvaAsset', event.target.files[0]);
      this.formData.append('canvaAssetName', `${event.target.files[0].name}`);
      this.formData.append('canvaUserID', `${ window.sessionStorage.getItem('canvaUserID') }`);
      this.formData.append('canvaTeamID', `${ window.sessionStorage.getItem('canvaTeamID') }`);
      

    }
  }


  getCanvaAssets(): void {
    this._canvaService.getCanvaAssets({ 
      canvaUserID: window.sessionStorage.getItem('canvaUserID'),

    }).subscribe((response: any) => {
      this.CanvaAssets = response;
      console.log(this.CanvaAssets);
    });
  }


  newDesignDialog() {
    this._matDialog.open(
      NewDesignDialog   
    );
  }



  previewAssetDialog(asset: any) {
    this._matDialog.open(
      PreviewAssetDialog,
      {
        data: {
          asset: asset
        }
      }    
    );
  }

  geminiAsset(): void {
    this._canvaService.geminiAsset(this.formData).subscribe((response: any) => {
      console.log(response);

    });
  }

  newCanvaDesign(): void {
    this._canvaService.newCanvaDesign({ accessToken: window.sessionStorage.getItem('accessToken')}).subscribe((response: any) => {
      console.log(response);
    })
  }


  getCanvaBrandTemplates(): void {
    this._canvaService.getCanvaBrandTemplates({ accessToken: window.sessionStorage.getItem('accessToken')}).subscribe((response: any) => {
      console.log(response);
    })
  }

  getCanvaFolders(): void {
    this._canvaService.getCanvaFolders({ canvaUserID: window.sessionStorage.getItem('canvaUserID')}).subscribe((response: any) => {
      this.Folders = response;
    })
  }

  
  renameFolder(id: String): void {
    window.localStorage.setItem('folderID', `${ id }`);

  }


  getCanvaDesigns(): void {
    this._canvaService.getCanvaDesigns({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
    }).subscribe((res: any) => {
      this.Designs = res.items;
      console.log(this.Designs);
    });

  }

  getCanvaDesign(id: String): void {
    this._canvaService.getCanvaDesign({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      designID: id,
    }).subscribe((res: any) => {
      console.log(res);
    })

  }

  previewDesign(url: String): void {
    console.log(url);

    this.PreviewURL = url;
    console.log(this.PreviewURL);
  }

  async uploadDesign(url: String) {
    await fetch(`${ url }`, {
      headers: new Headers({
        'method': 'GET',
        'Content-Type': 'application/json'
      })
    })
    .then(response => response.blob())
  .then(blob => {
    console.log(blob);
    // proceed with converting the blob to a File object
  });
    
  }
}


@Component({
  selector: 'new-design-dialog',
  templateUrl: 'newDesignDialog.html',
})
export class NewDesignDialog implements OnInit{
  Response: any;
  CanvaDocs: String[] = ['doc', 'presentation', 'whiteboard'];


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FolderE,
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    public _matSnackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    
  }

  newDesignForm = this._formBuilder.group({
    width: ['', Validators.required],
    height: ['', Validators.required],
    assetId: ['', Validators.required],
    title: ['', Validators.required]
  })


  createNewDesign() {
    this._canvaService.newCanvaDesign({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      width: this.newDesignForm.value.width,
      height: this.newDesignForm.value.height,
      assetId: this.newDesignForm.value.assetId,
      title: this.newDesignForm.value.title
    }).subscribe((response: any) => {
      this.Response = JSON.stringify(response.design);

    });
  }
  
}


@Component({
  selector: 'new-folder-dialog',
  templateUrl: 'newFolderDialog.html',
})
export class NewFolderDialog {
  Response: any;

  constructor(
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    public _matSnackBar: MatSnackBar
  ) {}


  newFolderForm = this._formBuilder.group({
    folderName: ['', Validators.required ]
  });

  createNewFolder(): void {
    this._canvaService.createNewFolder({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      canvaUserID: window.sessionStorage.getItem('canvaUserID'),
      canvaTeamID: window.sessionStorage.getItem('canvaTeamID'),
      folderName: this.newFolderForm.value.folderName 
    }).subscribe((res: any) => {
      this.Response = `Folder Created Successfully: ${ JSON.stringify(res.folder) }`;

    });
  }
}

@Component({
  selector: 'edit-folder-dialog',
  templateUrl: 'editFolderDialog.html',
})
export class EditFolderDialog {
  Response: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FolderE,
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    public _matSnackBar: MatSnackBar
  ) {}


  updateFolderForm = this._formBuilder.group({
    folderName: ['', Validators.required ]
  });  

  updateFolder(): void {
    this._canvaService.updateFolder({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      folderID: this.data.folder.id,
      folderName: this.updateFolderForm.value.folderName 
    }).subscribe((response: any) => {
      this.Response = `Folder Updated Successfully ${ JSON.stringify(response.folder) }`;
    });
  }

}

@Component({
  selector: 'folder-info-dialog',
  templateUrl: 'folderInfoDialog.html',
})
export class FolderInfoDialog implements OnInit{
  Folder?: CanvaFolder;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FolderQ,
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    public _matSnackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    this._canvaService.getCanvaFolder({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      folderID: this.data.folder.folderID,
    }).subscribe((response: any) => {
      this.Folder = response.folder;
    });    
  }

  editFolderDialog(folder: any) {
    this._matDialog.open(
      EditFolderDialog,
      {
        data: {
          folder: folder
        }
      }      
    );
  }


  folderItemsDialog(folder: any) {
    this._matDialog.open(
      FolderItemsDialog,
      {
        data: {
          folder: folder
        }
      }      
    );
  }

  deleteFolder(folder: any): void {
    this._canvaService.deleteFolder({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      folderID: folder.id,
    }).subscribe((response: any) => {
      console.log(response);
    });
  }

}

@Component({
  selector: 'folder-items-dialog',
  templateUrl: 'folderItemsDialog.html',
})
export class FolderItemsDialog implements OnInit{
  FolderItems?: FolderItem[]
  Response: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: FolderE,
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    public _matSnackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    this._canvaService.getCanvaFolderItems({ 
      accessToken: window.sessionStorage.getItem('accessToken'),
      folderID: this.data.folder.id,
    }).subscribe((response: any) => {
      this.FolderItems = response.items;
    });    
  }

  
}


@Component({
  selector: 'preview-asset-dialog',
  templateUrl: 'previewAssetDialog.html',
})
export class PreviewAssetDialog implements OnInit{
  Asset?: Asset;
  Response: any;


  constructor(
    @Inject(MAT_DIALOG_DATA) public data: AssetQ,
    private _canvaService: CanvaService,
    private _formBuilder: FormBuilder,
    private _matDialog: MatDialog,
    public _matSnackBar: MatSnackBar
  ) {}


  ngOnInit(): void {
    this._canvaService.getCanvaAsset({
      accessToken: `${ window.sessionStorage.getItem('accessToken') }`,
      assetID: this.data.asset.assetID 
    }).subscribe((response: any) => {
      this.Asset = response.asset;
    });
  
  }

  updateAssetForm = this._formBuilder.group({
    name: ['', Validators.required ],
    tags: ['']
  });


  updateAsset(): void {
    this._canvaService.updateCanvaAsset({
      accessToken: `${ window.sessionStorage.getItem('accessToken') }`,
      assetID: this.data.asset.assetID,
      name: this.updateAssetForm.value.name,
      tags: new Array(`${ this.updateAssetForm.value.tags }`)
    }).subscribe((response: any) => {
      this.Response = `Asset Updated: ${ JSON.stringify(response.asset)}`;
    });
  }

  deleteAsset(): void {
    this._canvaService.deleteCanvaAsset({
      accessToken: `${ window.sessionStorage.getItem('accessToken') }`,
      assetID: this.data.asset.assetID 
    }).subscribe((response: any) => {
      this.Response = 'Asset Deleted Successfully.'
    });
  }

  
}




