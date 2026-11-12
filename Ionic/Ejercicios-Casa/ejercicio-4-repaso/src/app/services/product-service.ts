import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/Product.model';

@Service()
export class ProductService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getProds(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>('https://dummyjson.com/products?limit=0');
  }
}
