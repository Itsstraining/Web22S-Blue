import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { ServiceService } from 'src/app/services/service.service';
import { Gundam } from '../models/Gundammodel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  public listItem: Array<Gundam>=[]
  constructor(public database:DataService,public calcu:ServiceService) { 
     console.log(this.database.listItem)
     this.listItem=this.database.listItem;
  }

  ngOnInit(): void {
  }

}
