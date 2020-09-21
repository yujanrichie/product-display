import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../services/product.service';
import { ProductInfo, ProductType, ProductTypeMediaInfo, ProductTypeSizeInfo } from '../../models/product-info';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  public productData: ProductInfo = null;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  private getProductData(): void {
    this.productService.getProductData().subscribe(data => this.productData = data);
  }
}
