import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {HeaderComponent} from "../../common/components/header/header.component";
import {AirplaneService} from "../../services/airplane-service";
import {Vehiculo} from "../../common/interfaces/vehiculo";
import {BoatService} from "../../services/boat-service";
import {CardComponent} from "../../common/components/card/card.component";

@Component({
  selector: 'app-boats',
  templateUrl: './boats.page.html',
  styleUrls: ['./boats.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, CardComponent]
})
export class BoatsPage implements OnInit {

  dataService: BoatService = inject(BoatService);
  vehiculos: WritableSignal<Vehiculo[]> = signal<Vehiculo[]>([]);
  constructor() { }

  ngOnInit() {
    this.cargarBoats();
  }

  private cargarBoats() {
    this.dataService.getBoats().subscribe(
      {
        next:(respuesta)=> {
          this.vehiculos.set(respuesta.data);
        },
        error:(err) =>{
          console.error(err);
        },
        complete:() => {
          console.log("Componentes cargados");
          console.log(this.vehiculos());
        }
      }
    )
  }

}
