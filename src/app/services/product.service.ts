import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { apiUrl } from '../app.module';
import { IProduct } from '../models/IProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = apiUrl;
  }

  GetProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.apiUrl + "products/");
  }

  GetProductDetails(id: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(this.apiUrl + "products/" + id);
  }
}
