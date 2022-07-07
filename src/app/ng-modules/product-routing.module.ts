import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from '../modules/product/product-list/product-list.component';
import { ProductDetailsComponent } from '../modules/product/product-details/product-details.component';


const AppRoutes: Routes = [
  {
    path: '',
    redirectTo: "products",
    pathMatch: "full"
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'details',
    component: ProductDetailsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(AppRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule { }
