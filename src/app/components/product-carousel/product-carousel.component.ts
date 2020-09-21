import { Component, Input, OnInit } from '@angular/core';
import { ProductTypeMediaInfo } from 'src/app/models/product-info';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {
  public readonly baseImageURL: string = 'https://www.showpo.com/dw/image/v2/BDPQ_PRD';
  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;

  public mediaList: ProductTypeMediaInfo[] = [];
  @Input('MediaList')
  public set _MediaList(data: ProductTypeMediaInfo[]) {
    if (data != null) {
      this.mediaList = data;
      this.showProductMedia(0);
    }
  }

  private activeProductIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.showProductMedia(0);
    }, 500);
  }

  public previousProduct(): void {
    this.showProductMedia(this.activeProductIndex - 1);
  }

  public nextProduct(): void {
    this.showProductMedia(this.activeProductIndex + 1);
  }

  private showProductMedia(activeIndex: number): void {
    let productItems = document.getElementsByClassName('product-item');

    if (productItems == null) return;

    this.activeProductIndex = activeIndex;
    //check max bound
    if (activeIndex >= productItems.length) {
      this.activeProductIndex = 0;
    }

    //check min bound
    if (activeIndex < 0) {
      this.activeProductIndex = (productItems.length - 1);
    }

    let nextIndex = this.activeProductIndex + 1;
    //check max bound
    if (nextIndex >= productItems.length) {
      nextIndex = 0;
    }


    for (var i = 0; i < productItems.length; i++) {
      if ((productItems[i] != null) && (productItems[i].className != null)) {
        productItems[i].className = 'product-item';
      }
    }
    
    if ((productItems[this.activeProductIndex] != null) && (productItems[this.activeProductIndex].className != null)) {
      productItems[this.activeProductIndex].className += ' active';
    }

    if ((productItems[nextIndex] != null) && (productItems[nextIndex].className != null)) {
      productItems[nextIndex].className += ' next';
    }
  }

}
