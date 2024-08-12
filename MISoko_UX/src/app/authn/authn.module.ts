import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';


import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { AuthnRoutingModule } from './authn-routing.module';
import { AuthnComponent } from './authn.component';



@NgModule({
  declarations: [
    AuthnComponent
  ],
  imports: [
    CommonModule,
    AuthnRoutingModule,

    MatCardModule,
    MatButtonModule,
    MatIconModule,

  ],
  providers: [
    provideHttpClient()
  ],

})
export class AuthnModule { }
