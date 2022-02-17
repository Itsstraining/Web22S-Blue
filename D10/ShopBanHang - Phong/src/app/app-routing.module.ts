import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('./Modules/home/home.module').then(m => m.HomeModule) }, { path: 'shopping-cards', loadChildren: () => import('./Modules/shopping-cards/shopping-cards.module').then(m => m.ShoppingCardsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
