import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from 'src/app/components/counter/counter.component';
import { ListItemComponent } from 'src/app/components/list-item/list-item.component';
import { BodyComponent } from 'src/app/components/body/body.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { TopComponent } from 'src/app/components/top/top.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';




@NgModule({
  declarations: [
    ListItemComponent,
    BodyComponent,
    ItemComponent,
    CounterComponent,],
  imports: [
    CommonModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports:[ListItemComponent,BodyComponent,ItemComponent,CounterComponent, MatIconModule],
})
export class SharedModule { }
