import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LNPropertiesComponent } from './lNProperties.component';
import { NewComponent } from './new/new.component';

const routes: Routes = [
  { path: '', component: LNPropertiesComponent },
  { path: 'new', title: 'New Land And Properties AD', component: NewComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LNPropertiesRoutingModule { }
