import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  constructor(
    public dataSvc:ServicesService
    ) {
 
      
     }

  public array:Array<any> = []

  ngOnInit(): void {

  }
  public resultTotal = 0;
  public getData(){
    // this.resultTotal = this.paymentSV.getTotal()
  }

}
