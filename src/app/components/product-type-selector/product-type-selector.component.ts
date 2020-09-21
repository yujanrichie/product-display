import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ProductType } from 'src/app/models/product-info';

@Component({
  selector: 'app-product-type-selector',
  templateUrl: './product-type-selector.component.html',
  styleUrls: ['./product-type-selector.component.scss']
})
export class ProductTypeSelectorComponent implements OnInit {
  public selectedColor: string = '';
  public readonly baseImageURL: string = 'https://www.showpo.com/dw/image/v2/BDPQ_PRD';

  
  public productTypeList: ProductType[] = [];
  @Input('ProductTypeList')
  public set _ProductTypeList(data: ProductType[]) {
    if (data != null) {
      this.productTypeList = data;
      this.setSelectedColor();
    }
  }

  @Output()
  public selectedID: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  private setSelectedColor(): void {
    if (this.productTypeList == null) return;

    const selectedType: ProductType = this.productTypeList.find(type => type.isSelected === true);
    this.selectedColor = selectedType.colorText;
  }

}
