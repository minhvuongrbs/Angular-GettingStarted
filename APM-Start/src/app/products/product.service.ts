import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IProduct } from './product';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private productUrl = 'api/products/products.json';
  constructor(private httpClient: HttpClient) {}

  getProduct(): Observable<IProduct[]> {
    return this.httpClient
      .get<IProduct[]>(this.productUrl)
      .pipe(tap((data) => console.log(data)));
  }
}
