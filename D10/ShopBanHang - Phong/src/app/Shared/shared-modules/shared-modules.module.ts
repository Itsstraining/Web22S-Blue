import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CouterComponent } from 'src/app/Components/couter/couter.component';
import { ItemsComponent } from 'src/app/Components/items/items.component';
import { ListItemsComponent } from 'src/app/Components/list-items/list-items.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    CouterComponent,
    ItemsComponent,
    ListItemsComponent,
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule

  ],
  exports:[
    CouterComponent,
    ItemsComponent,
    ListItemsComponent,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class SharedModulesModule { }
