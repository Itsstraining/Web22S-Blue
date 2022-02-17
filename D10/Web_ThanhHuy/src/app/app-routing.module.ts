import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: 'home', loadChildren: () => import('../app/pages/home/home.module').then(m => m.HomeModule) }, { path: 'shopping_cart', loadChildren: () => import('../app/pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
