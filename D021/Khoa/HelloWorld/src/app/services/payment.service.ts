import { User,Auth, } from '@angular/fire/auth';
import { Injectable } from '@angular/core';
import {ServicesService} from './services.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  public user!: User | null;
  constructor(public dataService:ServicesService) {}

  getTotal(): number {
    let total = 0;
    for(let i = 0; i<this.dataService.itemList.length;i++){
      total += this.dataService.itemList[i].Quantity * this.dataService.itemList[i].NewPrice;
    }
    return total;
  } 
}

  

