import { FormControl, FormGroup } from '@angular/forms';
import { Items } from './../models/item';
import { Component, OnInit } from '@angular/core';
import { doc,collection,docData,collectionData,Firestore, addDoc } from'@angular/fire/firestore';

@Component({
  selector: 'app-list-Item',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.scss']
})
export class ListItemsComponent implements OnInit {
  Items: import("@angular/fire/firestore").DocumentData[];

  constructor(
    private _Firestore:Firestore
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  public items: Array<Items> = [];

  private ref = collection(this._Firestore,'item');
  getAllData() {
   collectionData(this.ref, {idField:'id'}).subscribe((res:any)=>{
     this.Items = res
   })
  }

  itemForm = new FormGroup({
    name: new FormControl(''),
    quantity: new FormControl(''),
  });

  addData() {
    addDoc(this.ref, this.itemForm.value).then((res)=>console.log(res));
  }

}
