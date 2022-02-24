import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!:FormGroup
  user:any
  constructor(public formBuild:FormBuilder, public auth:Auth) 
  {
    if(auth){
      authState(this.auth).subscribe((temp:any)=>{
         this.user=temp;
       });
      
     }
    this.form =formBuild.group({
      math:['',[Validators.email,Validators.required] ],
      
      result:['',Validators.required],
    })
    
   }

   submit(){
     if(this.form.valid){
       let sub =this.form.value
       alert(`email ${sub.math} ten ${sub.result}`)
     }else{
       alert("Fail")
     }
   }


  ngOnInit(): void {
  }
 
}
