import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente, Usuario} from "../common/interfaces";
import {ApiResponseMovie} from "../common/models/movie.model";
import {PathKind} from "@angular/forms/signals";
import Root = PathKind.Root;
import {environment} from "../../environments/environment";
import {DataResponse} from "../common/models/celda.model";

@Service()
export class DataService {
  private http: HttpClient = inject(HttpClient);

  getComponentes(): Observable<Componente[]>{
    return this.http.get<Componente[]>('assets/data/menu.json');
  }


  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
  }

  /*getMovies(page: number): Observable<ApiResponseMovie>{
    return this.http.get<ApiResponseMovie>('');
  }*/

  getDataZelda(category: string): Observable<DataResponse>{
    return this.http.get<DataResponse>(environment.baseURLZelda+'/'+category);
  }
}
