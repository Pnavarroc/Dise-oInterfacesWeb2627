import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/RMModel';
import { environment } from '../../environments/environment';

@Service()
export class RMService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getCharacters(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(environment.UrlRM);
  }
}
