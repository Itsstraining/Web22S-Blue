import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, Firestore,deleteDoc,doc } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Game } from 'src/app/models/game.model';
import { DataService } from 'src/app/services/data.service';
import { ShoopingCartService } from 'src/app/services/shooping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public data: Game[] = [];
  constructor(public cart:ShoopingCartService,private firestore: Firestore, private dataSv: DataService) {
}
  ngOnInit(): void {
    this.getAllData();
  }
  public payment=0;
  public ThanhTien(){
    this.payment = this.cart.getPayment();
    alert(this.payment);
  }

  public Items : Array<Game> = [];
  private ref = collection(this.firestore,'items');
  getAllData(){
    collectionData(this.ref,{idField:'BanAcc'}).subscribe((res:any)=>{
      this.Items = res;
    })
  }
  itemForm = new FormGroup({
    photoUrl : new FormControl(''),
    name: new FormControl(''),
    price : new FormControl(''),
    atm : new FormControl(''),
    quantily: new FormControl(''),
  });
  addData(){
    addDoc(this.ref,this.itemForm.value);
  }
}
