import { Items } from './../../models/item';
import { Component, Input, OnInit } from '@angular/core';
import { deleteDoc, doc, Firestore, updateDoc } from 'firebase/firestore';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item!:Items;

  constructor(
    private _Firestore:Firestore
  ) { }

  ngOnInit(): void {
  }

  updateQuantity(params: string) {
   if(params == "+") {
     this.item.quantity++;
     updateDoc(doc(this._Firestore,'items',this.item.id),{
       ...this.item
     })
   }else{
     if(this.item.quantity == 0) {
       deleteDoc(doc(this._Firestore,'items', this.item.id));
     }else{
       this.item.quantity--;
     }updateDoc(doc(this._Firestore,'items',this.item.id),{
       ...this.item
     })
   }
   console.log(this.item);
  }
}

  

