import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehiculo} from "../common/interfaces/vehiculo";

@Service()
export class CarService {
  private http: HttpClient = inject(HttpClient);

  getCars(): Observable<{ data: Vehiculo[] }>{
    return this.http.get<{ data: Vehiculo[] }>('https://api-vehiculos.vercel.app/api/v1/coches/get/all');
  }
}
