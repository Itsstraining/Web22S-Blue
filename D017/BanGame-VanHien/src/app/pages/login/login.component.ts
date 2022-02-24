import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Auth,authState,signInAnonymously, signOut, User,signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;
  user : any;
  constructor(private formBuider : FormBuilder,public router:Router,private auth: Auth) {
    if(auth){
      authState(this.auth).subscribe((temp:any)=>{
         this.user=temp;
       }); 
     }
    this.form = this.formBuider.group({
      question : ['',Validators.required],
      answer : ['',Validators.pattern],
    })
  }

  ngOnInit(): void {
  }
  submit(){
    if (this.form.value.question >= this.form.value.answer) {
      alert(parseInt(JSON.stringify(this.form.value.question)));
    }else{
      alert(parseInt(JSON.stringify(this.form.value.answer)));
    }
  }
  public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider());
  }
  public async logout() {
    return await signOut(this.auth);
  }
}
