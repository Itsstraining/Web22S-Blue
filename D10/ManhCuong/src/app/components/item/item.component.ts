import { Component, Input, OnInit, Output, } from '@angular/core';

import {Gundam} from '../models/Gundammodel'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!:any; 
public quantity=0;
public totalPrice=0;
  ngOnInit(): void {

    // console.log(this.item)
  }
  test(a:any){
    this.item.Quantity=a
    // this.quantity=a
    // this.totalPrice=this.quantity*this.item.price


    // console.log(this.totalPrice)
  }
}

