import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { ValorantApiResponse } from '../interfaces/valorant-agent';

@Service()
export class ValorantService {
  private readonly http: HttpClient = inject(HttpClient);
  private readonly baseUrl = 'https://valorant-api.com/v1/agents';

  getAgents(): Observable<ValorantApiResponse> {
    return this.http.get<ValorantApiResponse>(this.baseUrl);
  }
}
