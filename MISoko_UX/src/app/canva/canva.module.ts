import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule }  from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBar } from '@angular/material/progress-bar';

import { CanvaRoutingModule } from './canva-routing.module';
import { CanvaComponent, NewDesignDialog, NewFolderDialog, EditFolderDialog, FolderInfoDialog, FolderItemsDialog, PreviewAssetDialog } from './canva.component';


@NgModule({
  declarations: [
    CanvaComponent,
    NewFolderDialog,
    NewDesignDialog,
    EditFolderDialog,
    FolderInfoDialog,
    FolderItemsDialog,
    PreviewAssetDialog
  ],
  imports: [
    CommonModule,
    CanvaRoutingModule,
    ReactiveFormsModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatDialogModule,
    MatProgressBar
  ]
})
export class CanvaModule { }
