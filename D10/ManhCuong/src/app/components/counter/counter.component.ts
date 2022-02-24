import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class COUNTERComponent implements OnInit {
  public couter = 0;
  @Output() interChange = new EventEmitter()
  public increment() {
    if (this.couter >= 10) {
      return;
    } else {
      this.couter++;
      this.interChange.emit(this.couter)
    }
  }

  public decrement() {
    if (this.couter <= 0) {
      return;
    } else {
      this.couter--;
      this.interChange.emit(this.couter)
    }

  }
  ngOnInit(): void {

    console.log()
  }

}
