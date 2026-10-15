import {inject, Service} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {GameItem, Response} from "../interfaces/game-item";

@Service()
export class ZeldaService {
  private http: HttpClient = inject(HttpClient);


  getItems(category: string): Observable<Response>{
    return this.http.get<Response>("https://api.hyrule-compendium.com/v3/compendium/category/"+category);
  }

}
