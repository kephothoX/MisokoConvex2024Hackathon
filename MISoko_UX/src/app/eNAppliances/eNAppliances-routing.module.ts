import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ENAppliancesComponent } from './eNAppliances.component';

import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: ENAppliancesComponent },
  { path: 'new', title: 'New Electrical And  Appliance AD', component: NewComponent },
  { path: 'view/:id', title: 'View', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ENAppliancesRoutingModule { }
