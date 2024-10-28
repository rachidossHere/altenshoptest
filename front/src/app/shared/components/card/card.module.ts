import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    CardComponent
  ],
  imports: [
    CommonModule
    ],
 exports: [
  CardComponent
 ]
})
export class CardModule { }
