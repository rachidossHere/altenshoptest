import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { CardModule } from './components/card';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PaginationModule } from './components/pagination';



@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent,
    CardModule,
    PaginationModule
  ]
  
})
export class SharedModule { }
