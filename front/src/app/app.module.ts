import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ToastrModule } from 'ngx-toastr';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { SharedModule } from "./shared/shared.module";
import { FeatureComponent } from './feature/feature.component';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
    StoreModule.forRoot({ router: routerReducer }),
    StoreDevtoolsModule.instrument({
        name: "NgRx Demo App",
        maxAge: 25,
        trace: true
    }),
    EffectsModule.forRoot([]),
    ToastrModule.forRoot(),
    StoreRouterConnectingModule.forRoot(),
    SharedModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
