import { Component, OnInit } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  user: any;

  constructor(public auth:Auth) { 
    if(auth){
     authState(this.auth).subscribe((temp:any)=>{
        this.user=temp;
     console.log(this.user)

      });
    }
  }

  ngOnInit(): void {
  }
  public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider())
  }
  public async logout(){
    return await signOut(this.auth);
  }
}
