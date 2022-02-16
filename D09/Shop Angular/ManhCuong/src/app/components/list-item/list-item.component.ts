import { Component, OnInit } from '@angular/core';
import { Gundam } from '../models/Gundammodel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  public listItem: Array<Gundam>=[
    {name :"Gundam Barbatos",
     price: "490.000đ",
     photoURL: "https://file.hstatic.net/1000231532/file/full_mechanics_gundam_barbatos_lupus_rex_1-100_chinh_hang_grande.jpg"
  },
      {name :"Gundam Cherudim",
      price: "242,450đ",
      photoURL: "http://gundamchat.com/wp-content/uploads/2018/07/M%C3%B4-h%C3%ACnh-l%E1%BA%AFp-r%C3%A1p-Bandai-HG-00-Gundam-Cherudim-GNHWR-13.jpg"
  },
      {name :"Gundam Seravee",
      price: "207,000đ",
      photoURL: "https://file.hstatic.net/1000231532/file/seravee_gundam_hg__1144_grande.jpg"
  } ,
  {name :"Gundam Arios",
     price: "190.000đ",
     photoURL: "https://file.hstatic.net/1000231532/file/arios_gundam_hg__1144_grande.jpg"
  },
  {name :"Gundam Exia",
     price: "190.000đ",
     photoURL: "https://tabmohinh.com/wp-content/uploads/2020/04/M%C3%B4-h%C3%ACnh-l%E1%BA%AFp-r%C3%A1p-HG-GN-001-Gundam-Exia-Bandai-5.jpg"
  },
  {name :"Gundam 00 Raiser",
     price: "190.000đ",
     photoURL: "https://tabmohinh.com/wp-content/uploads/2019/11/M%C3%B4-h%C3%ACnh-HG-00-Raiser-GN-Condenser-Type-Bandai-11.jpg"
  },
  {name :"Gundam Virtue ",
     price: "190.000đ",
     photoURL: "https://product.hstatic.net/1000231532/product/shop_gundam_ban_gundam_virtue_hg00_hg_fc8bdbe0922b4318bdea27cf19fe0011_master.jpg"
  },
  {name :"Gundam 00 Diver Ace",
  price: "190.000đ",
  photoURL: "https://cf.shopee.vn/file/426705983f9029bf7af233d85e4ec93f&zimken.jpg"
  },
  {name :"Gundam Kyrios",
  price: "190.000đ",
  photoURL: "https://cf.shopee.vn/file/0053ea575a6b8c1357657cb0b8c15694"
},
  {name :"Gundam Dynames",
  price: "190.000đ",
  photoURL: "https://cdn-amz.fadoglobal.io/images/I/61XZJJ+BveL.jpg"
 },

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
