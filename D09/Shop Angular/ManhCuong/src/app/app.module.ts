import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AvartarComponent } from './components/avartar/avartar.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import {MatSelectModule} from '@angular/material/select';
import { COUNTERComponent } from './components/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavBarComponent,
    AvartarComponent,
    ListItemComponent,
    COUNTERComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
