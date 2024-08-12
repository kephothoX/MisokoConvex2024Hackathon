import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthnComponent, LoginComponent, SignUpComponent, LogOutComponent  } from './authn.component';

import { SigninComponent } from './signin/signin.component';

const routes: Routes = [
  { path: '', component: AuthnComponent },
  { path: 'login', title: 'Login', component: LoginComponent },
  { path: 'signup', title: 'SignUp', component: SignUpComponent },
  { path: 'logout', title: 'Logout', component: LogOutComponent },

  { path: 'signin', title: 'SignIn', component: SigninComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthnRoutingModule { }
