import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from 'src/app/components/item/item.component';
import { NavBarComponent } from 'src/app/components/nav-bar/nav-bar.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';
import { COUNTERComponent } from 'src/app/components/counter/counter.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'


@NgModule({
  declarations: [ ItemComponent,
    NavBarComponent,ListItemComponent,COUNTERComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,

    
    
  ],exports:[ItemComponent,NavBarComponent,ListItemComponent
    ,COUNTERComponent, MatSelectModule, MatIconModule,MatButtonModule,MatDividerModule
    ,MatFormFieldModule,ReactiveFormsModule,MatInputModule]
})
export class ShareModule { }
