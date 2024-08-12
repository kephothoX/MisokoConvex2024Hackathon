import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyADsComponent } from './myADs.component';

import { UpdateENApplianceComponent } from './updateENAppliances/updateENAppliance.component';
import { UpdateAutoMobileComponent } from './updateAutoMobile/updateAutoMobile.component';
import { UpdateLNPropertyComponent } from './updateLNProperty/updateLNProperty.component';
import { UpdatePNAccessoryComponent } from './updatePNAccessory/updatePNAccessory.component';
import { UpdateSNIndustryComponent } from './updateSNIndustry/updateSNIndustry.component';

const routes: Routes = [
  { path: '', component: MyADsComponent },

  { path: 'ENAppliances/update/:id', title: 'Update Electrical And Appliance', component: UpdateENApplianceComponent },

  { path: 'PNAccessories/update/:id', title: 'Update Phone And Accessory', component: UpdatePNAccessoryComponent },

  { path: 'SNIndustries/update/:id', title: 'Update Service And Industry', component: UpdateSNIndustryComponent },

  { path: 'LNProperties/update/:id', title: 'Update Land And Property', component: UpdateLNPropertyComponent },

  { path: 'AutoMobiles/update/:id', title: 'Update AutoMobile', component: UpdateAutoMobileComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyADsRoutingModule { }
