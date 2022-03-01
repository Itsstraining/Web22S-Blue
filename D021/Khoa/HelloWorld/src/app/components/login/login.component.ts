import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';
import { user } from 'rxfire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
form!:FormGroup
User:any
  constructor(public formbuilder:FormBuilder, public auth:Auth) { 
    if(auth) {
      authState(this.auth).subscribe((temp:any) => {
        this.User=temp;
        console.log(this.User)
      })
    }

  }


  ngOnInit(): void {
  this.form = this.formbuilder.group({
    name:'',
    result:'',
  }) 
  }
  
  public async signIn () {
    return await signInWithPopup(this.auth,new GoogleAuthProvider);
  }
  
  public async logout () {
    return await signOut(this.auth);
  }

  

  Result() {
    alert();
  }

}
