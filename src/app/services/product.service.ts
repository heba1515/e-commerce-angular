import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    return this.http.get('https://dummyjson.com/products');
  }

  getProductDetails(id: number) {
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }
}
