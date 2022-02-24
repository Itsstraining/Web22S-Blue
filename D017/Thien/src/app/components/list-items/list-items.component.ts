import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
import { PaymentService } from '../../services/payment.service';
@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {

  constructor(public dataSv: DataService, public paySV: PaymentService) { }
  public ListItem: Array<any> = []
  ngOnInit(): void {
    console.log(this.dataSv.ListItem);
    this.ketQua = this.paySV.Total()
  }
  public ketQua = 0;
  public tinhTongTien(e: string) {
    console.log(this.ListItem)
    this.ketQua = this.paySV.Total()
  }
}



