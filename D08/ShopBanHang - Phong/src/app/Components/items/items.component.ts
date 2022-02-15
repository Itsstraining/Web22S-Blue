import { Component, OnInit } from '@angular/core';
import { Account } from '../Modules/account.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})

export class ItemsComponent implements OnInit {

public accounts:Array<Account>=[{
        name: "Sản hẩm 1:",
        price: "Giá: 20 $",  
        photoURL: "../../../assets/1495863.jpg",
        description: "Mô tả: Đẹp ^^",
},
  
{
    name: "Sản hẩm 2:",
    price: "Giá: 10 $",
    photoURL: "../../../assets/I0cw3N.jpg",
    description: "Mô tả: Ngầu ^^"
},
{
    name: "Sản hẩm 3:",
    price: "Giá: 120 $",
    photoURL: "../../../assets/673691-the-best-csgo-wallpaper-you-have-ever-seen-dmarket.jpg",
    description: "Mô tả: Ngầu ^^"
},
{
    name: "Sản hẩm 4:",
    price: "Giá: 160 $",
    photoURL: "../../../assets/a35a4f755944263778d83434f9540336.jpg",
    description: "Mô tả: Ngầu ^^"
},
// {
//     name: "Sản hẩm 5:",
//     price: "Giá: 100 $",
//     photoURL: "../../../assets/9b810acd4fd224e8310fa60d89987c64.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 6:",
//     price: 30,
//     photoURL: "../../../assets/CSGO-Shattered-Web-Weapon-skins.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 7:",
//     price: 40,
//     photoURL: "../../../assets/image038.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 8:",
//     price: 70,
//     photoURL: "../../../assets/thumb.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 9:",
//     price: 50,
//     photoURL: "../../../assets/251-2518912_dragon-lore-m4a4-wallpaper-hd.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 10:",
//     price: 30,
//     photoURL: "../../../assets/13_hu72e133212d8bfddeec207a17c1eed613_1257994_1920x1080_resize_q75_lanczos.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 11:",
//     price: 50,
//     photoURL: "../../../assets/81195cd15d579b8395cddb63bc65e6be.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
// {
//     name: "Sản hẩm 12:",
//     price: 30,
//     photoURL: "../../../assets/sawed-off-rise-workshop-cs-go.jpg",
//     description: "Mô tả: Ngầu ^^"
// },
]
  constructor() { }

  ngOnInit(): void {
  }

}
