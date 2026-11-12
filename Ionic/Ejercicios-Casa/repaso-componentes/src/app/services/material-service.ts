import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../common/models/Materials';
import { Observable } from 'rxjs';

@Service()
export class MaterialService {
  private readonly http: HttpClient = inject(HttpClient);

  private readonly url = 'https://api.hyrule-compendium.com/v3/compendium/category/materials';

  public getMaterials(): Observable<ApiResponse>{
    return this.http.get<ApiResponse>(this.url);
  }

}
