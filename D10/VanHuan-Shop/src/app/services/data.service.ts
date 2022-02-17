import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public listGame: Array<Game> =[
    {
      photoURL: "https://cdn1.epicgames.com/spt-assets/c42ae799022048238861e7f2290153e6/download-sheepo-offer-4t6zr.jpg?h=854&resize=1&w=640", 
        name: "Sheepo", 
        price: 93000,
        quantity: 0
    }, 
    {
      photoURL: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_Synergia_RadiArt_S2_1200x1600-39ebad4a8ec2afa3b35c7cf6f500c2e6?h=854&resize=1&w=640",
        name: "Synergia",
        price: 78400,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/spt-assets/1a5b400c59084c55af646a9e7af4bc81/download-strategic-mind--blitzkrieg-offer-v1fm6.png?h=854&resize=1&w=640",
        name: "Strategic Mind: Spectre of Communism",
        price:  242450,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/offer/b7b42e2078524ab386a8b2a9856ef557/EGS_SIFUStandardEdition_Sloclap_S4_1200x1600-32aca69d756abfcc25f8581942a6162b_1200x1600-32aca69d756abfcc25f8581942a6162b?h=854&resize=1&w=640",
        name: "Sifu",
        price:  373000,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7?h=854&resize=1&w=640",
        name: "God of War",
        price:  1139000,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/offer/6f43ab8025ad42d18510aa91e9eb688b/EGS_FINALFANTASYVIIREMAKEINTERGRADE_SquareEnix_S2_1200x1600-e147110cf8dd1bc8c96810a5867b3475?h=854&resize=1&w=640",
        name: "FINAL FANTASY VII REMAKE INTERGRADE",
        price:  1799000,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png?h=854&resize=1&w=640",
        name: "Far Cry 6 Standard Edition",
        price:  990.000,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/salesEvent/salesEvent/EGS_IdleChampionsoftheForgottenRealms_CodenameEntertainment_S2-1200x1600-c67f1998f4ed6ba79d9e5e71cfb30b23_1200x1600-c67f1998f4ed6ba79d9e5e71cfb30b23?h=854&resize=1&w=640g",
        name: "Idle Champions of the Forgotten Realms",
        price: 0,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/offer/jackal/EGS_LIVEFORTHEHUNT_PhoenixLabs_S2_1200x1600-2d143974e9171cc658b2fece0b5f437e?h=854&resize=1&w=640",
        name: "Dauntless",
        price:  0,
        quantity: 0
    },
    {
      photoURL: "https://cdn1.epicgames.com/offer/0ded1556336546bf849c9d28878ec86c/EGS_FoundersPackSwagEdition_FlyingWildHog_Bundles_S2_1200x1600-c81b43a1059999cea6abad417665f515?h=854&resize=1&w=640",
        name: "Space Punks Founders Pack: Swag Edition",
        price:  280000,
        quantity: 0
    },
  ]
  constructor() { }
}
