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
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [    
    ItemComponent,
    // HearderComponent,
    ListItemsComponent,
    CounterComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule
  ],exports:[
    ItemComponent,
    // HearderComponent,
    ListItemsComponent,
    CounterComponent,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule,
    MatExpansionModule,
    MatInputModule,   
    ReactiveFormsModule
  ]
})
export class SharedModule { }
