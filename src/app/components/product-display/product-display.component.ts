import { Component, OnInit } from '@angular/core';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import { ProductService } from 'src/app/services/product.service';
import { ProductInfo } from 'src/app/models/product-info';

@Component({
  selector: 'app-product-display',
  templateUrl: './product-display.component.html',
  styleUrls: ['./product-display.component.scss']
})
export class ProductDisplayComponent implements OnInit {
  public productData: ProductInfo = null;
  public selectedTypeIndex: number = 0;
  public breadcrumbs: string[] = [];
  public faHeart = faHeart;

  constructor(public productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData();
  }

  private getProductData(): void {
    this.productService.getProductData().subscribe(data => {
      this.productData = data;
      
      //find the selected type
      if ((this.productData != null) && (this.productData.types != null) &&
          (this.productData.types.length > 0)) {
        this.selectedTypeIndex = this.productData.types.findIndex(type => type.isSelected === true);

        //set first item as selected by default if none selected
        if (this.selectedTypeIndex === -1) {
          this.productData.types[0].isSelected = true;
          this.selectedTypeIndex = 0;
        }

        //set breadcrumbs
        this.breadcrumbs = this.productData.hierarchy.split(' > ');
        this.breadcrumbs.push(this.productData.types[this.selectedTypeIndex].name);
        
      }

      console.log('data', this.productData)
    });
  }
}
