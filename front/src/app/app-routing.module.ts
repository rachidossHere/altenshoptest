import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_ROUTE_FEATURE, APP_ROUTE_FEATURE_CART, APP_ROUTE_FEATURE_CONTACT, APP_ROUTE_FEATURE_DEFAULT, APP_ROUTE_FEATURE_SHOP, APP_ROUTE_FEATURE_WILDCARD } from './app.route';
import { FeatureComponent } from './feature/feature.component';

const routes: Routes = [
  {
    path: APP_ROUTE_FEATURE,
    component: FeatureComponent,
    children:         [
      { path: APP_ROUTE_FEATURE_CART,  loadChildren: () => import('./feature/cart').then(m => m.CartModule) },
      { path: APP_ROUTE_FEATURE_CONTACT,  loadChildren: () => import('./feature/contact').then(m => m.ContactModule) },
      { path: APP_ROUTE_FEATURE_SHOP,  loadChildren: () => import('./feature/shop').then(m => m.ShopModule) },

      
      {
        path:       APP_ROUTE_FEATURE_WILDCARD,
        redirectTo: APP_ROUTE_FEATURE_DEFAULT,
        pathMatch:  'prefix'
      }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
