import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public sumElement=0;
  public payment =0;

  constructor(public data: DataService) {}
  public sumItem(){
    this.payment=0
    for(let i=0;i<this.data.listItem.length;i++){
      this.payment += this.data.listItem[i].Quantity*this.data.listItem[i].price
    }
    console.log(this.payment)
}}

