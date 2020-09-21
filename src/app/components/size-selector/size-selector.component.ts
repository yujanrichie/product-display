import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ProductTypeSizeInfo } from 'src/app/models/product-info';


interface SizeInfo {
  size: string;
  textSize?: string;
  inStock: boolean;
  isSelected: boolean;
}

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.scss']
})
export class SizeSelectorComponent implements OnInit {
  public selectedIndex: number = -1;
  public selectedSize: string = '';

  public sizeInfoList: ProductTypeSizeInfo[] = [];
  @Input('SizeInfoList')
  public set _SizeInfoList(data: ProductTypeSizeInfo[]) {
    if (data != null) {
      this.sizeInfoList = data;
    }
  }

  @Output()
  public SizeSelected: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public selectSize(index: number): void {
    //selected size is not the same size
    if ((this.sizeInfoList != null) && (index != this.selectedIndex)) {
      this.unselectAll();
      this.sizeInfoList[index].isSelected = true;
      this.selectedIndex = index;
      this.selectedSize = this.sizeInfoList[index].size
      this.SizeSelected.emit(this.sizeInfoList[index].size);
    }
  }

  private unselectAll(): void {
    if (this.sizeInfoList != null) this.sizeInfoList.forEach(info => info.isSelected = false);
    this.selectedIndex = -1;
  }
}
