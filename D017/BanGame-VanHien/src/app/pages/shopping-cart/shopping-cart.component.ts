import { Component, OnInit } from '@angular/core';
import { ShoopingCartService } from 'src/app/services/shooping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  constructor(public cart:ShoopingCartService,) { }

  ngOnInit(): void {
  }
  public payment=0;
  public ThanhTien(){
    this.payment = this.cart.getPayment();
    alert(this.payment);
  }

}
