import { Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class CalculaService {
  public sumElement !:any;
  public payment = 0;
  constructor(public data: DataService) { }

  public sumItem() {
    this.payment=0;
    for (let i = 0; i < this.data.listGame.length; i++) {
      this.payment += this.data.listGame[i].quantity * this.data.listGame[i].price;
    }
    // console.log(this.payment)
    this.sumElement=alert("Paymenat: "+this.payment)
  }

}
