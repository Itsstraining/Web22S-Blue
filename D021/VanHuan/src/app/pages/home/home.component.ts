import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { addDoc } from 'firebase/firestore';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  formitem!:FormGroup;
  constructor(private formBuild:FormBuilder,public dataGame:DataService) {
    this.formitem=this.formBuild.group({
      name:'',
      price:'',
      photoURL:'',
      quantity:''
    })
   }

  ngOnInit(): void {
  }
  addData(){
    console.log(this.formitem.value)
    addDoc(this.dataGame.collet,this.formitem.value)
  }
}
