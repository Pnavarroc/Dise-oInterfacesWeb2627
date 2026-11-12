import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Publicacion } from '../common/models/Publicaciones.mode';

@Service()
export class PublicacionesService {
  private readonly http: HttpClient = inject(HttpClient);

  getPublicaciones(): Observable<Publicacion[]>{
    return this.http.get<Publicacion[]>('https://jsonplaceholder.typicode.com/posts');
  }
}
