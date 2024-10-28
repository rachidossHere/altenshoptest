import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import {  ShopComponent } from './shop.component';
import { StoreModule } from '@ngrx/store';
import { shopReducer } from './shop.store';
import { EffectsModule } from '@ngrx/effects';
import {  ShopEffects } from './shop.effects';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    StoreModule.forFeature('shop', shopReducer),
    EffectsModule.forFeature([ShopEffects]),
    SharedModule
  ]
})
export class ShopModule { }
