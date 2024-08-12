import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './authn/auth.guard'

import { TandcsComponent } from './components/tandcs/tandcs.component';


const routes: Routes = [
  { path: '', redirectTo: '/pNAccessories', pathMatch: 'full' },

  { path: 'tands', title: 'Terms & Component', component: TandcsComponent },
  
  { path: 'eNAppliances', loadChildren: () => import('./eNAppliances/eNAppliances.module').then(m => m.ENAppliancesModule )},

  { path: 'pNAccessories', loadChildren: () => import('./pNAccessories/pNAccessories.module').then(m => m.PNAccessoriesModule )},

  { path: 'sNIndustry', loadChildren: () => import('./sNIndustry/sNIndustry.module').then(m => m.SNIndustryModule )},

   { path: 'lNProperties', loadChildren: () => import('./lNProperties/lNProperties.module').then(m => m.LNPropertiesModule )},


  { path: 'authn', loadChildren: () => import('./authn/authn.module').then(m => m.AuthnModule) },

  { path: '404', title: 'Error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },
  { path: 'autoMobiles', loadChildren: () => import('./autoMobiles/autoMobiles.module').then(m => m.AutoMobilesModule) },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'canva', loadChildren: () => import('./canva/canva.module').then(m => m.CanvaModule) },
  { path: 'myADs', loadChildren: () => import('./myADS/myADs.module').then(m => m.MyADsModule) },
  
  { path: '**', title: 'Error', loadChildren: () => import('./error/error.module').then(m => m.ErrorModule) },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
