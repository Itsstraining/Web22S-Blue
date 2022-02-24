import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData} from '@angular/fire/firestore';
import {Item} from '../models/item.model'
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public ListItem:Array<any>=[]
  constructor(public firestore:Firestore) {
    let collect=collection(firestore,'Items');
    collectionData(collect,{idField:'idDoc'}).subscribe((data)=>{
      this.ListItem=data;
    })
   }
  // public ListItem:Array<Item> =[
  //   {name:"Abeldo",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/abeldo.jfif",
  //   quantity:0
  // },

  //   {name:"Ace",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/ace.jfif",
  //   quantity:0},
  //   {name:"Gingameth",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/ginga.jfif",
  //   quantity:0},
  //   {name:"Kaido",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/kaido.jfif",
  //   quantity:0},
  //   {name:"Luffy",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/luf.jfif",
  //   quantity:0},
  //   {name:"Robin",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/robin.jfif",
  //   quantity:0},
  //   {name:"Robin",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/robin2.jfif",
  //   quantity:0},
  //   {name:"Shoto",
  //   price:"100000",
  //   photoUrl:"../../../assets/images/shoto.jfif",
  //   quantity:0},

  // ]

}
