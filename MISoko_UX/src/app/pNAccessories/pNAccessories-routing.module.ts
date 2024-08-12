import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PNAccessoriesComponent } from './pNAccessories.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: PNAccessoriesComponent },
  { path: 'new', title: 'New Phone And Accessories AD', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PNAccessoriesRoutingModule { }
