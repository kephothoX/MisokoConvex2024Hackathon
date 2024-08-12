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
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';



import { MyADsRoutingModule } from './myADs-routing.module';
import { MyADsComponent } from './myADs.component';
import { UpdateENApplianceComponent } from './updateENAppliances/updateENAppliance.component';
import { UpdateAutoMobileComponent } from './updateAutoMobile/updateAutoMobile.component';
import { UpdateSNIndustryComponent } from './updateSNIndustry/updateSNIndustry.component';
import { UpdateLNPropertyComponent } from './updateLNProperty/updateLNProperty.component';
import { UpdatePNAccessoryComponent } from './updatePNAccessory/updatePNAccessory.component';


@NgModule({
  declarations: [
    MyADsComponent,
    UpdateENApplianceComponent,
    UpdateAutoMobileComponent,
    UpdateENApplianceComponent,
    UpdatePNAccessoryComponent,
    UpdateSNIndustryComponent,
    UpdateLNPropertyComponent

  ],
  imports: [
    CommonModule,
    MyADsRoutingModule,
    ReactiveFormsModule,

    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSnackBarModule,
    MatGridListModule,
    MatProgressBarModule,
    MatTabsModule,
    MatListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class MyADsModule { }
