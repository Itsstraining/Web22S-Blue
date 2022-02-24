import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TopComponent } from './components/top/top.component';
// import { MidComponent } from './components/mid/mid.component';
// import { BottomComponent } from './components/bottom/bottom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';

import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

// import { ItemComponent } from './components/item/item.component';
// import { ListItemsComponent } from './components/list-items/list-items.component';
// import { MywebComponent } from './components/myweb/myweb.component';
// import { ShopaccComponent } from './components/shopacc/shopacc.component';

@NgModule({
  declarations: [
    AppComponent,
    // TopComponent,
    // MidComponent,
    // BottomComponent,
    // ItemComponent,
    // ListItemsComponent,
    // MywebComponent,
    // ShopaccComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
