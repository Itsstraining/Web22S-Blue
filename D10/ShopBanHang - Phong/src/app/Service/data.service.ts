import { Injectable } from '@angular/core';
import { Account } from '../Components/Models/account.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  public accounts:Array<Account>=[{
    name: "Sản Phẩm 1:",
    price: 120,  
    photoURL: "../../../assets/1495863.jpg",
    description: " Đẹp ^^",
    quantity: 0,
  },

  {
  name: "Sản Phẩm 2:",
  price: 110,
  photoURL: "../../../assets/I0cw3N.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 3:",
  price: 120,
  photoURL: "../../../assets/673691-the-best-csgo-wallpaper-you-have-ever-seen-dmarket.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 4:",
  price: 160,
  photoURL: "../../../assets/a35a4f755944263778d83434f9540336.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 5:",
  price: 100,
  photoURL: "../../../assets/9b810acd4fd224e8310fa60d89987c64.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 6:",
  price: 300,
  photoURL: "../../../assets/CSGO-Shattered-Web-Weapon-skins.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 7:",
  price: 400,
  photoURL: "../../../assets/image038.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 8:",
  price: 700,
  photoURL: "../../../assets/thumb.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 9:",
  price: 500,
  photoURL: "../../../assets/251-2518912_dragon-lore-m4a4-wallpaper-hd.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 10:",
  price: 300,
  photoURL: "../../../assets/13_hu72e133212d8bfddeec207a17c1eed613_1257994_1920x1080_resize_q75_lanczos.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 11:",
  price: 500,
  photoURL: "../../../assets/81195cd15d579b8395cddb63bc65e6be.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
  {
  name: "Sản Phẩm 12:",
  price: 300,
  photoURL: "../../../assets/sawed-off-rise-workshop-cs-go.jpg",
  description: " Ngầu ^^",
  quantity: 0,
  },
]


}
