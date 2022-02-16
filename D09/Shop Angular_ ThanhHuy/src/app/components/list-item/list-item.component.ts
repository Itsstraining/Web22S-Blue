import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/service/data.service';
import {Game} from '../../models/game.model';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  // public games: Array<Game> = [{name:"BattleField",price:"1000 VNĐ", photoURL:"../../../assets/img/g1.png",des:"Game bắn súng dành cho trẻ em"},
  // {name:"League of Legend",price:"2000 VNĐ", photoURL:"../../../assets/img/g2.jpg",des:"Chơi để thành quỷ vương phết cơ"},
  // {name:"Valorant",price:"3000 VNĐ", photoURL:"../../../assets/img/g3.jpg",des:"Đột kích hàng hiệu"},
  // {name:"God of War",price:"4000 VNĐ", photoURL:"../../../assets/img/g4.jpg",des:"GOTY"},
  // {name:"Captain Tsubasa",price:"5000 VNĐ", photoURL:"../../../assets/img/g19.png",des:"PES, FIFA gọi bằng bố"},
  // {name:"PES 2021",price:"6000 VNĐ", photoURL:"../../../assets/img/g5.png",des:"FIFA tuổi tôm sánh bằng"},
  // {name:"Free Fire",price:"7000 VNĐ", photoURL:"../../../assets/img/g6.jpg",des:"Game đuồi bầu, đờ bờ rờ rờ "},
  // {name:"Genshin Impact",price:"8000 VNĐ", photoURL:"../../../assets/img/g7.jpg",des:"Game kiếm vợ"},
  // {name:"One Piece Pirate Warrior 3",price:"9000 VNĐ", photoURL:"../../../assets/img/g18.png",des:"Giả lập làm hải tặc"},
  // {name:"Naruto Storm 4",price:"10000 VNĐ", photoURL:"../../../assets/img/g20.png",des:"Shinobi simulator"}];
  

  constructor( public dataSv: DataService) {
    
  }

  ngOnInit(): void {
  }


}
