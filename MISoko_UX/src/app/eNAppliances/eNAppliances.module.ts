import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBar } from '@angular/material/progress-bar';


import { ENAppliancesRoutingModule } from './eNAppliances-routing.module';
import { ENAppliancesComponent } from './eNAppliances.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';


@NgModule({
  declarations: [
    ENAppliancesComponent,
    NewComponent,
    ViewComponent
  ],
  imports: [
    CommonModule,
    ENAppliancesRoutingModule,
    ReactiveFormsModule,

    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
    MatDividerModule,
    MatGridListModule,
    MatProgressBar
  ]
})
export class ENAppliancesModule { }
