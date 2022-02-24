import { Component, OnInit } from '@angular/core';
import { CalculaService } from 'src/app/services/calcula.service';
import { DataService } from 'src/app/services/data.service';
import {Game} from '../../models/game.model'

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
 public list: Array<Game> =[];
 public pay=0;
 public print!:any
  constructor(public dataGame:DataService,public calcu:CalculaService ) {
    // console.log(this.dataGame.listGame);
    this.list=this.dataGame.listGame;
  }

  // public intoMoney(a:any){
  //   this.pay+=a;
  //   console.log(this.pay)
  //   // this.pay=this.calcu.payment
  // }
  public intoMoney(a:any){
    this.pay+=a;
    console.log(this.pay)
  }


  ngOnInit(): void {

  }
}
