import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/zelda-model';

@Service()
export class ZeldaService {
  private readonly http: HttpClient = inject(HttpClient);

  private readonly baseUrl: string = 'https://api.hyrule-compendium.com/v3/compendium/category/materials';

  getMaterials(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(this.baseUrl);
  }
}
