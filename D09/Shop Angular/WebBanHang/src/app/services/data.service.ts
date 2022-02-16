import { Injectable } from '@angular/core';
import { Account } from '../models/account.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data:Array<Account>=[{
    name: "Tài khoản Netflix Premium for 1 user",
    price: 79000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/NETFLIX1406.png?hash=1623646686",
    quantity: 1,
  },
  {
    name: "Gói gia hạn Spotify Premium 01 năm",
    price: 299000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/Spotify%201%20nam.png?hash=1623646056",
    quantity: 4,
  },
  {
    name: "Discord Nitro 3 tháng",
    price: 149000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh 1406/New/Discord Nitro 3 thang.png?hash=1625106596",
    quantity: 0,
  },
  {
    name: "Tài khoản Grammarly Premium 1 năm",
    price: 490000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Grammarly Premium 1 năm.png?hash=1623645444",
    quantity: 0,
  }];
  constructor() { }
  public printAllData(){
    console.log(this.data);
  }
}
