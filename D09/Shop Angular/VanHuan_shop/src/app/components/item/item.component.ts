import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
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
  constructor() { }
  
  ngOnInit(): void {
    console.log(this.item)
  }
  test(a:any){
    this.quantily=a;
    console.log(this.quantily);
    this.totalPrice=this.quantily*this.item.price;
    this.totalMoney.emit(this.totalPrice);
    console.log(this.totalPrice);
  }
}


// (contChange)="item.qua=$even"