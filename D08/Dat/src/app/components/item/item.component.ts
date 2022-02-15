import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/models/account.model';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public accounts:Array<Account>=[{
      name: "Tài khoản Netflix Premium for 1 user",
      price: 79000,
      photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
      description: 'ABC',
    },
    {
      name: "Gói gia hạn Spotify Premium 01 năm",
      price: 299000,
      photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/Spotify%201%20nam.png?hash=1623646056",
      description: 'ABC',
    },
    {
      name: "Discord Nitro 3 tháng",
      price: 149000,
      photoURL: "https://cdn.divineshop.vn/image/catalog/Anh 1406/New/Discord Nitro 3 thang.png?hash=1625106596",
      description: 'ABC',
    },
    {
      name: "Tài khoản Grammarly Premium 1 năm",
      price: 490.000,
      photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Grammarly Premium 1 năm.png?hash=1623645444",
      description: 'ABC',
    }];

  

    constructor() { }



  ngOnInit(): void {
  }

}
