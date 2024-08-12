import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutoMobilesComponent } from './autoMobiles.component';
import { NewComponent } from './new/new.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  { path: '', component: AutoMobilesComponent },
  { path: 'new', title: 'New AutoMobile AD',  component: NewComponent },
  { path: 'view/:id', title: 'AutoMobile AD', component: ViewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutoMobilesRoutingModule { }
