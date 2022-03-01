import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {ListItemsComponent} from '../../app/components/list-items/list-items.component'
import { FooterComponent } from '../components/footer/footer.component';
import { ItemComponent } from '../components/item/item.component';
import { QuantityComponent } from '../components/quantity/quantity.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
@NgModule({
  declarations: [
    ListItemsComponent,
    ItemComponent,
    QuantityComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule
    
    
  ],
  exports:[
    ListItemsComponent,
    ItemComponent,
    QuantityComponent,
    FooterComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule
    
  ],
  providers: [],
  bootstrap: []
})
export class SharedModule { }
