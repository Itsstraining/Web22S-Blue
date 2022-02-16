import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Output() itemChange= new EventEmitter();

  constructor() { }
  public couter = 0;

  public increment() {
    if(this.couter >= 10){
    return;
  }else{
    this.couter++;
    this.itemChange.emit(this.couter);
  }
  }
  public decrement(){
    if(this.couter <= 0){
      return;
    }else{
      this.couter--;
      this.itemChange.emit(this.couter);
    }
  }
  
  ngOnInit(): void {
  }

}
