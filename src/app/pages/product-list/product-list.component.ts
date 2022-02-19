import { Component, OnInit } from '@angular/core';
import { products } from './config/products.config';
import { Product } from './models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = products;
  public enableProductEdit: boolean = false;

  constructor() {
    console.log('Me he construido');
  }

  ngOnInit(): void {
    console.log("Me he iniciado");
  }

  public modifyProducts() {
    this.enableProductEdit = !this.enableProductEdit;
  }

  public deleteParentProduct(id: string) {
    this.products = this.products.filter(el => el.id !== id);
  }

}
