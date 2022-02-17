import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  navigate(path: string){
    this.router.navigateByUrl(path);
  }

}
