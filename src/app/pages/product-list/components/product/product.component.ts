import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../../models/product.models';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  @Input() public product?: Product;
  @Input() public enableProductEdit: boolean = false;
  @Output() public onDeleteProduct = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public deleteProduct() {
    if (this.product) {
      this.onDeleteProduct.emit(this.product.id);
    }
  }

}
