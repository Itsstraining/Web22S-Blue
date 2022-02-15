import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  public games: Array<Game> = [{name:"BattleField",price:"1000 VNĐ", photoURL:"../../../assets/img/g1.png"}];

  constructor() { }

  ngOnInit(): void {
  }


}
