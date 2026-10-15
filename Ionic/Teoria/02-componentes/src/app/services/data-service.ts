import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Componente, Usuario} from "../common/interfaces";

@Service()
export class DataService {
  private http: HttpClient = inject(HttpClient);

  getComponentes(): Observable<Componente[]>{
    return this.http.get<Componente[]>('assets/data/menu.json');
  }


  getUsers(): Observable<Usuario[]>{
    return this.http.get<Usuario[]>('https://jsonplaceholder.typicode.com/users');
  }
}
