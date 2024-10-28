import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { CharacterCountPipe } from './caracter-count.pipe';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    ReactiveFormsModule,
    CharacterCountPipe,
    ToastrModule,
    SharedModule
  ],
  exports: [
    CharacterCountPipe
  ]
})
export class ContactModule { }
