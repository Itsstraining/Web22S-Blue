import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, authState, signInWithPopup,GoogleAuthProvider, signOut, User } from '@angular/fire/auth';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
 public user:any;
  constructor(public auth: Auth, private router: Router) { 
    authState(this.auth).subscribe((temp:any)=>{
      this.user=temp;
    })
  }

  ngOnInit(): void {
  }
  navigate(path:string){
    this.router.navigateByUrl(path)
  }
  public async login(){
    return await signInWithPopup(this.auth,new GoogleAuthProvider())
  }
  public async logout(){
    return await signOut(this.auth);
  }
}
