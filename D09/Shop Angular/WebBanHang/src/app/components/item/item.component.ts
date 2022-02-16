import { Component, Input, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
import { TinhTienService } from 'src/app/services/service-thanhToan/tinh-tien.service';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() item!: Account;
  public totalPrice:number=0;
  constructor(public tinhTong:TinhTienService) {}
  ngOnInit(): void {
  }
  test(a: any) {
    
  }
}
