import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Firestore,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Game } from 'src/app/models/game.model';
import { DataService } from 'src/app/services/data.service';
import { ShoopingCartService } from 'src/app/services/shooping-cart.service';
import { SumService } from 'src/app/services/sum.service';
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  
  @Input() item !: Game;
  @Output() itemChange = new EventEmitter();

  constructor(public sum:SumService, public cartSp:ShoopingCartService,private dataSv: DataService,private fireStore:Firestore) {}

  ngOnInit(): void {
    console.log(this.item)
  }
  public increase(){
    if (this.item.quantily >= 10){
      return;
    }else {
      this.item.quantily++;    
      this.total = this.item.quantily * this.item.atm;
    }
    this.itemChange.emit(this.item.quantily);
    updateDoc(doc(this.fireStore,'items',this.item.BanAcc),{
      ...this.item
    })
  }
  public decrease(){
      if(this.item.quantily == 0){
        deleteDoc(doc(this.fireStore,'items',this.item.BanAcc));
      }else{
        this.item.quantily--;
        this.total = this.item.quantily * this.item.atm;
      }
    this.itemChange.emit(this.item.quantily);
    updateDoc(doc(this.fireStore,'items',this.item.BanAcc),{
      ...this.item
    })
  }
  // public sumimg='';
  // public Sum(){
  //   let x = this.sum.Sum();
  //   this.sumimg = `<p>${x}</p>`;
  // }
  public total:number=0; 
  public addItem(){
    this.cartSp.listCart.push(this.item)
    alert(this.item.name + this.item.atm)
  }
}
