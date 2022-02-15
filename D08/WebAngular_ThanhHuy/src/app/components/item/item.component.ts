import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!:Game;
  constructor() { }

  ngOnInit(): void {
  }

}
