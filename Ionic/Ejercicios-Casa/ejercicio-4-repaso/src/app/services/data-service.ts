import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/Category.model';
import { environment } from '../../environments/environment';

@Service()
export class DataService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getData(category: string): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(environment.BaseUrl+"/"+category);
  }
}
