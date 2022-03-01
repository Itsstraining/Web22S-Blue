import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RandowComponent } from './randow.component';

const routes: Routes = [{ path: '', component: RandowComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RandowRoutingModule { }
