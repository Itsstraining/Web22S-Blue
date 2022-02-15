import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ContainerComponent } from './Components/container/container.component';
import { CouterComponent } from './Components/couter/couter.component';
import { ItemsComponent } from './Components/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    CouterComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
