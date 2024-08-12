import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthnComponent  } from './authn.component';

import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: AuthnComponent },

  { path: 'signin', title: 'SignIn', component: SigninComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthnRoutingModule { }
