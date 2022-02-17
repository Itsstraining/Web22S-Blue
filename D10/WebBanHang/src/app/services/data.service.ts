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
    quantity: 0,
  },
  {
    name: "Gói gia hạn Spotify Premium 01 năm",
    price: 299000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh/Banner/Spotify%201%20nam.png?hash=1623646056",
    quantity: 0,
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
  },
  {
    name: "Tài khoản Amazon Prime Gaming",
    price: 29000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-san-pham/Tien/Prime Gaming 15 ngày-58286.png?hash=1644403116",
    quantity: 0,
  },
  {
    name: "PUBG 1000 G-COIN",
    price: 225000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Tien/Anh SP/7.7/G COIN 1000.png?hash=1625652188",
    quantity: 0,
  },
  {
    name: "Tài khoản Adobe Photography",
    price: 169000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Phi/Adobe Photography 3 thang-79975.png?hash=1634037039",
    quantity: 0,
  },
  {
    name: "Steam Wallet Code 100 TWD",
    price: 93000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Steam wallet new/STEAM 100 TWD.png?hash=1622878183",
    quantity: 0,
  },
  {
    name: "Steam Wallet Code 40 HKD",
    price: 128000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh-SP-New/Steam wallet new/STEAM 120 HKD.png?hash=1622878183",
    quantity: 0,
  },
  {
    name: "Steam Wallet Code 200 ARS",
    price: 64000,
    photoURL: "https://cdn.divineshop.vn/image/catalog/Anh 1406/New/STEAM 200 ARS.png?hash=1624949235",
    quantity: 0,
  },
];
  constructor() { }
  public printAllData(){
    console.log(this.data);
  }
}
