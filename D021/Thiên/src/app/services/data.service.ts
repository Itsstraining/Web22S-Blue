import { Injectable } from '@angular/core';
import { Firestore,collection,collectionData,doc,
  updateDoc,
  deleteDoc,} from '@angular/fire/firestore';
import {Item} from '../models/item.model'
import { PaymentService } from './payment.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: Item[] = [];
  public collectItems = collection(this.firestore, 'items');
  constructor(public pay:PaymentService, public firestore: Firestore) {}
  public createListenerData(data: Item[]) {
    return collectionData(this.collectItems, {
      idField: 'id',
    });
  }
  public updateAllData() {
    for (let item of this.data) {
      let tempId = (item as any)['id'];
      updateDoc(doc(this.firestore, 'Items', tempId), {
        ...item,
      });
    }
  }
  public update(item: Item) {
    let tempId = (item as any)['id'];
    updateDoc(doc(this.firestore, 'Items', tempId), {
      ...item,
    });
  }
  public delete(item: Item) {
    let tempId = (item as any)['id'];
    deleteDoc(doc(this.firestore, 'Items', tempId));
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
