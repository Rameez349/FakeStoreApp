import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { ProductRoutingModule } from './product-routing.module';

import { ProductDetailsComponent } from '../modules/product/product-details/product-details.component';
import { ProductListComponent } from '../modules/product/product-list/product-list.component';
import { ProductTileComponent } from '../modules/product/product-tile/product-tile.component';
import { ProductService } from '../services/product.service';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductTileComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    HttpClientModule
  ],
  providers:[ProductService]
})
export class ProductModule { }
