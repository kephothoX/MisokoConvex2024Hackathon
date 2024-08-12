import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SNIndustryComponent } from './sNIndustry.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: SNIndustryComponent },
  { path: 'new', title: 'New Service And Industry AD', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SNIndustryRoutingModule { }
