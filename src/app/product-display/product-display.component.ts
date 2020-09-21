import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  public productData: any = null;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  private getProductData(): void {
    this.productService.getProductData().subscribe(data => this.productData = data);
  }

}
