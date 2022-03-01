import { Component, OnInit } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { Game } from 'src/app/models/game.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

 form!:FormGroup;
  constructor(private formBuild:FormBuilder) {
    // this.form=this.formBuild.group({
    //   soa:['',Validators.required],
    //   sob:['',Validators.required]
    // })
    this.form=this.formBuild.group({
      a:['',Validators.required,Validators.email],
      b:['',Validators.required]
    })
   }


  ngOnInit(): void {
  }
  // submit(){
  //   //update 1 biến
  //   this.form.patchValue({
  //     soa: 3,
  //   });
  //   // this.form.setValue({
  //   //   soa: 3,
  //   //   sob: 5 
  //   // });
  // if(this.form.value.soa>this.form.value.sob)
  //   alert("skufhsaiufh")
  // }
  submit(){
    let formr=this.form.value;
    // alert(`a: ${form.a} b: ${form.b}`)
    alert(this.form.value.a)
  }
// public data: Game[]=[];
// constructor(private firestore:Firestore,private dataSv:DataService){
//  dataSv.pushAutoData();
// }
// ngOnInit(): void {  
//}
}
