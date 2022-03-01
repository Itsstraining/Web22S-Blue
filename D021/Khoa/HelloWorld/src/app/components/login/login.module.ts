import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { ShareModule } from 'src/app/shared/shared.module';
@NgModule({
  declarations: [
    LoginComponent
  ],
  
  imports: [
    ShareModule,
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
