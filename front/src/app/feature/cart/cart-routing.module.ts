import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CART_ROUTE_DEFAULT, CART_ROUTE_ROOT, CART_ROUTE_WILDCARD } from './cart.route';
import { CartComponent } from './cart.component';

const routes: Routes = [
  { path: CART_ROUTE_ROOT, component: CartComponent },
  { path: CART_ROUTE_WILDCARD, redirectTo: CART_ROUTE_DEFAULT }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
