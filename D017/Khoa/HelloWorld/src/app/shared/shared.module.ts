import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CounterComponent } from '../components/counter/counter.component';
import { ItemComponent } from '../components/item/item.component';
import { ItemsComponent } from '../components/items/items.component';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
	CounterComponent,
	ItemsComponent,
	ItemComponent,
  ],
  imports: [
  MatInputModule,
	CommonModule,
	FormsModule,
  ReactiveFormsModule
  ],
  exports: [
    MatInputModule,
	ItemsComponent,
  ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [],
})
export class ShareModule {
 }
