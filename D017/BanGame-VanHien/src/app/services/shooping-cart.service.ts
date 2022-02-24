import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class ShoopingCartService {

  public toTalTong:number=0;
  public listCart:Array<Game>=[]
  constructor(public tong:DataService) {}
  getPayment(){
    this.toTalTong = 0;
    for(let i=0; i<this.listCart.length; i++){
      this.toTalTong+=this.listCart[i].atm* this.listCart[i].quantily;
    }
    return this.toTalTong;
  }
}
