import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './modules/core/page-not-found/page-not-found.component';
import { ProductModule } from './ng-modules/product.module';
import { NavbarComponent } from './modules/core/navbar/navbar.component';


export const apiUrl: string = "https://fakestoreapi.com/";

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
