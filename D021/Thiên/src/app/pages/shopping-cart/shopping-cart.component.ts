import { Component, OnInit } from '@angular/core';
import {
  collection,
  collectionData,
  doc,
  docData,
  DocumentData,
  Firestore,
} from '@angular/fire/firestore';
import { Item } from 'src/app/models/item.model';
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})
export class ShoppingCartComponent implements OnInit {

  public data: Item[] = [];
  constructor(private firestore: Firestore, private dataSv: DataService) {
    dataSv.createListenerData(this.data).subscribe((value) => {
      this.data = value as Item[];
      this.dataSv.data = value as Item[];

      console.log(this.data);
    });
  }

  ngOnInit(): void {
  }

}
