import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/Valorant.model';
import { environment } from '../../environments/environment';


@Service()
export class ValorantService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getAgents(): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(environment.BaseUrl);
  }
}
