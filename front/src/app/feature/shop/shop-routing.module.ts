import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SHOP_ROUTE_ROOT, SHOP_ROUTE_WILDCARD, SHOP_ROUTE_DEFAULT } from './shop.route';
import { ShopComponent } from './shop.component';

const routes: Routes = [
  { path: SHOP_ROUTE_ROOT, component: ShopComponent },
  { path: SHOP_ROUTE_WILDCARD, redirectTo: SHOP_ROUTE_DEFAULT }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
