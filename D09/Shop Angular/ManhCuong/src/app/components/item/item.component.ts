import { Component, Input, OnInit } from '@angular/core';
import {Gundam} from '../models/Gundammodel'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
@Input() item!:Gundam; 
  constructor() { }
 
  ngOnInit(): void {
    console.log(this.item)
  }
}

