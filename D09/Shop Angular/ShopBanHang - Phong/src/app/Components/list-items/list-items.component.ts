import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/Service/data.service';
import { ThanhtoanService } from 'src/app/Service/thanhtoan.service';
import { Account } from '../Modules/account.model';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  public items:Array<Account>=[];

  constructor(public database:DataService,public tinhtong:ThanhtoanService) {
    this.items=this.database.accounts;
    
   }

  ngOnInit(): void {
 
  }

}
