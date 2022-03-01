import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./Pages/home/home.module').then(m => m.HomeModule) }, 
  { path: 'cart', loadChildren: () => import('./Pages/shopping-cart/shopping-cart.module').then(m => m.ShoppingCartModule) },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
