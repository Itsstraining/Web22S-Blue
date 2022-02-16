import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  public counter = 0;

  increment() {
    if(this.counter >= 10){
    return;
    }else{
      this.counter++;
      this.changeValue.emit(this.counter);
    }
  }
  decrement(){
    if(this.counter <= 0){
      return;
    }else{
      this.counter--;
      this.changeValue.emit(this.counter);
    }
  }
}
