import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../common/models/rm-characters.model';
import { environment } from '../../environments/environment';

@Service()
export class RmService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getCharacters(page: number): Observable<ApiResponse>{
    return this.httpClient.get<ApiResponse>(environment.URLBaseRM+ '/character?page'+page);
  }
}
