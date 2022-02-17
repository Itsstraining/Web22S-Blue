import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CouterComponent } from './Components/couter/couter.component';
import { ItemsComponent } from './Components/items/items.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import { ListItemsComponent } from './Components/list-items/list-items.component';
import { SharedModulesModule } from './Shared/shared-modules/shared-modules.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
