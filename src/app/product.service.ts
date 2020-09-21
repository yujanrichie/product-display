import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.get('data');
  }
}
