import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import {Game} from '../../models/game.model'

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
 public list: Array<Game> =[];
 public payment=0;
 public itemMoney=0;
  constructor(public dataGame:DataService) {
    console.log(this.dataGame.listGame);
    this.list=this.dataGame.listGame;
  }
  public intoMoney(a:any){
    this.itemMoney=a;
    this.payment= this.payment+this.itemMoney;
    console.log(this.payment)
  }


  ngOnInit(): void {
  }

}
