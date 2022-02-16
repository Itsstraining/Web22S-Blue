import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game.model';
import { TotalService } from 'src/app/service/Total/total.service';


@Component({
  selector: 'app-item', 
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!:Game;
  constructor(public TotalSV: TotalService) { }

  ngOnInit(): void {
  }

  public total=0;
  
  public test(a:any){
    this.total=a;
    this.TotalSV.totalPrice;
    console.log(a);
  }
  
}
