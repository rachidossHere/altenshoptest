import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartComponent } from './cart.component';
import { StoreModule } from '@ngrx/store';
import { cartReducer } from './cart.store';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    StoreModule.forFeature('cart', cartReducer),
    // EffectsModule.forFeature([ProductEffects]),
    SharedModule
  ]
})
export class CartModule { }
