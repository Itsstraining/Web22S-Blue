import { Component, OnInit } from '@angular/core';
import {Game} from '../../models/game.model'
@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  public game :Array<Game> =[

    {name :"Synergia",
    pirce: "₫78,400",
    photoURL: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Synergia_RadiArt_S2_1200x1600-39ebad4a8ec2afa3b35c7cf6f500c2e6?h=854&resize=1&w=640"
  },
    
      {name :"Strategic Mind:...",
      pirce: "₫242,450",
      photoURL: "https://cdn1.epicgames.com/spt-assets/1a5b400c59084c55af646a9e7af4bc81/download-strategic-mind--blitzkrieg-offer-v1fm6.png?h=854&resize=1&w=640"
},
    
      {name :"God of War",
      pirce: "₫1,139,000",
      photoURL: "https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S2_1200x1600-e147110cf8dd1bc8c96810a5867b3475?h=854&resize=1&w=640"
} 
  ]
  constructor() { }
 
  ngOnInit(): void {
  }

}
