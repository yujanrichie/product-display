import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-carousel',
  templateUrl: './product-carousel.component.html',
  styleUrls: ['./product-carousel.component.scss']
})
export class ProductCarouselComponent implements OnInit {

  public testImageList = [
    { imageURL: 'https://www.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dw2ae73acc/images/eyes-that-know-me-dress/eyesthatknowmedressinblack.jpg' },
    { imageURL: 'https://www.showpo.com/dw/image/v2/BDPQ_PRD/on/demandware.static/-/Sites-sp-master-catalog/default/dw2ae73acc/images/eyes-that-know-me-dress/eyesthatknowmedressinblack_.jpg' }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
