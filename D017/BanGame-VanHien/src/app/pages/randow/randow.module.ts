import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RandowRoutingModule } from './randow-routing.module';
import { RandowComponent } from './randow.component';


@NgModule({
  declarations: [
    RandowComponent
  ],
  imports: [
    CommonModule,
    RandowRoutingModule
  ]
})
export class RandowModule { }
