import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Vehiculo} from "../common/interfaces/vehiculo";

@Service()
export class BoatService {
  private http: HttpClient = inject(HttpClient);

  getBoats(): Observable<{data: Vehiculo[] }>{
    return this.http.get<{data: Vehiculo[] }>('https://api-vehiculos.vercel.app/api/v1/barcos/get/all');
  }
}
