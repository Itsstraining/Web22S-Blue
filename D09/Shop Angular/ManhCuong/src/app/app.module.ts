import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
;

import { AvartarComponent } from './components/avartar/avartar.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

import { ShareModule } from './shared/share/share.module';

@NgModule({
  declarations: [
    AppComponent,
  
    AvartarComponent,
 
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
