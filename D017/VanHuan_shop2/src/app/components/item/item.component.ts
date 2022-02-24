import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { CalculaService } from 'src/app/services/calcula.service';
import { CartItemService } from 'src/app/services/cart-item.service';
import {Game} from '../../models/game.model'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!:Game; 
@Output() totalMoney = new EventEmitter();
public quantily=0;
public totalPrice=0;
  constructor(public calcu:CalculaService,public cartItem:CartItemService) { }
  
  ngOnInit(): void {
    // console.log(this.item)
  }
  test(a:any){
    this.item.quantity=a
    // console.log(this.calcu.payment);
    // this.totalMoney.emit( this.calcu.payment);
  }
   public addItem(){
     this.cartItem.listCart.push(this.item);
     alert(`${this.item.name}+${this.item.price}`)
   }

  
}


// (contChange)="item.qua=$even"