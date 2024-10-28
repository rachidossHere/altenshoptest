import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CONTACT_ROUTE_DEFAULT, CONTACT_ROUTE_ROOT, CONTACT_ROUTE_WILDCARD } from './contact.route';
import { ContactComponent } from './contact.component';

const routes: Routes = [
  { path: CONTACT_ROUTE_ROOT, component: ContactComponent },
  { path: CONTACT_ROUTE_WILDCARD, redirectTo: CONTACT_ROUTE_DEFAULT }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactRoutingModule { }
