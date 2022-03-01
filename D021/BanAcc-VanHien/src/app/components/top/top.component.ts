import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  navigate(path:string){
    this.router.navigateByUrl(path);
  }
}
