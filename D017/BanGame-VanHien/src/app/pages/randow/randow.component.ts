import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randow',
  templateUrl: './randow.component.html',
  styleUrls: ['./randow.component.scss']
})
export class RandowComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  public Randow:any =[{
    photoUrl:"../../../assets/images/65k.jpg",
    name: "Thử vận may giá 65k",
    BanAcc: "Tài khoản hiện có:500", 
  },
  {
    photoUrl:"../../../assets/images/65k.jpg",
    name: "Thử vận may giá 200k",
    BanAcc: "Tài khoản hiện có:300", 
  },
  {
    photoUrl:"../../../assets/images/300k.jpg",
    name: "Thử vận may giá 300k",
    BanAcc: "Tài khoản hiện có:200", 
  },
  {
    photoUrl:"../../../assets/images/500k.jpg",
    name: "Thử vận may giá 500k",
    BanAcc: "Tài khoản hiện có:100", 
  },
  {
    photoUrl:"../../../assets/images/vongquay.png",
    name: "Vòng quay may mắn",
    BanAcc: "Số lượt quay đã quay:178945623",  
  },
]

}
