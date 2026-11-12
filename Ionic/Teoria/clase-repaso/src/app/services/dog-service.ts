import { Service, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DogModel } from '../common/models/dog.model';
import { environment } from '../../environments/environment';

@Service()
export class DogService {
  private readonly httpClient: HttpClient = inject(HttpClient);

  getDog(): Observable<DogModel>{
    return this.httpClient.get<DogModel>(environment.URLBaseDog);
  }
}
