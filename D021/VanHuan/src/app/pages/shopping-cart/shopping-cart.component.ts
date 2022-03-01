import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { CartItemService } from 'src/app/services/cart-item.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {
public thanhtien=0
  constructor(public pay: CartItemService) { }
  // public listItemAdd : Array<Game>=this.pay.listCart;
  ngOnInit(): void {
    this.pay.Payment();
  }


public thanhToan(){
 this.thanhtien=this.pay.Payment();
 alert("Tong tien la :"+this.thanhtien);
 this.pay.listCart=[];
 this.thanhtien=0;
}
}
