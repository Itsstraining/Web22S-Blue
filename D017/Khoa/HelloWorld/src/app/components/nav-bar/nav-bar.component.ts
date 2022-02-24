import { Component, OnInit } from '@angular/core';
import { Auth, authState, signInAnonymously, signOut, User, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  User:any
  constructor(public auth:Auth) { 
    if(auth) {
      authState(this.auth).subscribe((temp:any) => {
        this.User=temp;
      })
    }
  }

  ngOnInit(): void {
  }

  public async signIn () {
    return await signInWithPopup(this.auth,new GoogleAuthProvider);
  }
  
  public async logout () {
    return await signOut(this.auth);
  }

}
