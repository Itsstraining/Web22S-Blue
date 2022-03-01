import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  public listCart: Array<Game> =[]
  constructor() { }
  public tong =0;
  public Payment() {
    this.tong=0;
    for (let i = 0; i < this.listCart.length; i++) {
      this.tong += this.listCart[i].quantity * this.listCart[i].price;
    }
    // console.log(this.payment)
return this.tong
  }
}
