import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProductInfo, ProductType, ProductTypeMediaInfo, ProductTypeSizeInfo } from 'src/app/models/product-info';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  /**
   * Makes a _GET HTTP request to the json server
   * 
   * @param {string} route - The path of the endpoint to be requested
   */
  private get(route: string): Observable<any> {
    const url = 'http://localhost:3000/' + route;
    const headers = new HttpHeaders({
        'Accept': 'application/json'
    });

    return this.http.get(url, {headers: headers});
  }

  public getProductData(): Observable<any> {
    return this.get('data').pipe(
      map((data) => {
        //map server response data to client data
        if ((data == null) || (data.product == null)) { return null; }

        const productData = data.product;
        return this.getMappedProductInfo(productData);
      })
    );
  }

  private getMappedProductInfo(productData: any): ProductInfo {
    if (productData == null) return;

    let newProductInfo: ProductInfo = {
      id: productData.comestriID,
      status: productData.status,
      name: productData.name,
      hierarchy: productData.hierarchy,
      types: this.getMappedTypeList(productData.children)
    }

    return newProductInfo;
  }

  private getMappedTypeList(typeList: any[]): ProductType[] {
    if (typeList == null) return null;

    let mappedTypeList: ProductType[] = [];

    typeList.forEach(type => {
      if (type == null) return;
      
      let newProductType: ProductType = {
        id: type.comestriID,
        status: type.status,
        name: type.name,
        colorText: type.pdpColor,
        url: type.url,
        mediaList: this.getMappedMediaList(type.media),
        sizeList: this.getMappedSizeList(type.children)
      };

      mappedTypeList.push(newProductType);
    });

    return mappedTypeList;
  }

  private getMappedMediaList(mediaList: any[]): ProductTypeMediaInfo[] {
    if (mediaList == null) return null;

    let mappedMediaList: ProductTypeMediaInfo[] = [];

    mediaList.forEach(mediaInfo => {
      if (mediaInfo == null) return;
      
      let newMediaInfo: ProductTypeMediaInfo = {
        imageURL: mediaInfo.url,
        description: mediaInfo.description,
        isPrimary: mediaInfo.isPrimary
      };

      mappedMediaList.push(newMediaInfo);
    });

    return mappedMediaList;
  }

  private getMappedSizeList(sizeList: any[]): ProductTypeSizeInfo[] {
    if (sizeList == null) return null;

    let mappedSizeList: ProductTypeSizeInfo[] = [];

    sizeList.forEach(sizeInfo => {
      if (sizeInfo == null) return;
      
      let newSizeInfo: ProductTypeSizeInfo = {
        id: sizeInfo.comestriID,
        status: sizeInfo.status,
        name: sizeInfo.name,
        inStock: sizeInfo.inStock
      };

      //get size value from attribute property
      const attributes: any = sizeInfo.attributes;
      if ((attributes != null) && (attributes.size != null)) {
        const sizeParam = attributes.size.split(' ');
  
        //first sizeParam is the number display of size
        //second sizeParam is the text display of size
        newSizeInfo.size = sizeParam[0];
        newSizeInfo.textSize = sizeParam[1] ? sizeParam[1].replace(/[()]/g, '') : '';
      }

      mappedSizeList.push(newSizeInfo);
    });

    return mappedSizeList;
  }
}
