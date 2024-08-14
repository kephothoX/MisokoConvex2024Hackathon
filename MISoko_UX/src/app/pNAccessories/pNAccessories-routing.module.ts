import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PNAccessoriesComponent } from './pNAccessories.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: PNAccessoriesComponent },
  { path: 'new', title: 'New Phone And Accessories AD', component: NewComponent },
  { path: 'view/:id', title: 'View Phone And Accessory', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PNAccessoriesRoutingModule { }
