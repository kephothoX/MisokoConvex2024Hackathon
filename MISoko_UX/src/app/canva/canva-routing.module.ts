import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvaComponent } from './canva.component';

const routes: Routes = [{ path: '', component: CanvaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanvaRoutingModule { }
