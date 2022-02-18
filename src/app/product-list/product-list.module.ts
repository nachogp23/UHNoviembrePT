import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductListHeaderComponent } from './product-list-header/product-list-header.component';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductListHeaderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductListModule { }
