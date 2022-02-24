import { Injectable } from '@angular/core';
import { collection,collectionData,Firestore } from '@angular/fire/firestore';


@Injectable({
  providedIn:'root'
})
export class ServicesService {
  public itemList:Array<any>=[]
  constructor(  public Fs:Firestore,) { 
    let Item = collection(Fs,'List-item')
    collectionData(Item).subscribe((data)=>{
     this.itemList=data;
    }) 
  }
  
  // array = [
  //   {
  //     name:'Ducati',
  //     newPrice:300, 
  //     Image:"./../../../assets/Image/Model-Menu-MY20-Panigale-V4-Red (1).png",
  //     Quantity: 0
  //   },

  //   {
  //     name:'Ducati',
  //     newPrice:400, 
  //     Image:"./../../../assets/Image/2.png",
  //     Quantity: 0
  //   },

  //   {
  //     name:'Ducati',
  //     newPrice:500, 
  //     Image:"./../../../assets/Image/3.png",
  //     Quantity: 0

  //   },

  //   {
  //     name:'Ducati',
  //     newPrice:300, 
  //     Image:"./../../../assets/Image/2.png",
  //     Quantity: 0
  //   }
  // ]
}


    
