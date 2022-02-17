import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components/item/item.component';
import { HearderComponent } from 'src/app/components/hearder/hearder.component';
import { ListItemsComponent } from 'src/app/components/list-items/list-items.component';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  declarations: [    
    ItemComponent,
    ListItemsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule
  ],exports:[
    ItemComponent,
    ListItemsComponent,
    CounterComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule
  ]
})
export class SharedModule { }
