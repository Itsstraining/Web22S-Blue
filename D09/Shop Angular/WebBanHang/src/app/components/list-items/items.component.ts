import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {
  public items:Array<Account>=[];
    constructor(public database: DataService) {
      this.items=this.database.data;
    }

  ngOnInit(): void {
  }

}
