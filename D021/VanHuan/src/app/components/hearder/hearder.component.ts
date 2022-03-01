import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, GoogleAuthProvider, signInAnonymously, signInWithPopup, signOut, User } from '@angular/fire/auth';

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss']
})
export class HearderComponent implements OnInit {
 user!:any;
  constructor(public router:Router,public auth:Auth) { 
    if(auth){
     authState(this.auth).subscribe((temp:any)=>{
        this.user=temp;
        console.log(this.user);
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
  navigate(path: string){
    this.router.navigateByUrl(path);
  }

}
