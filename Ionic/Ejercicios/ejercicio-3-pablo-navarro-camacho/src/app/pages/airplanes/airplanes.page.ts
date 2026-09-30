import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {CarService} from "../../services/car-service";
import {Vehiculo} from "../../common/interfaces/vehiculo";
import {HeaderComponent} from "../../common/components/header/header.component";
import {CardComponent} from "../../common/components/card/card.component";
import {AirplaneService} from "../../services/airplane-service";

@Component({
  selector: 'app-airplanes',
  templateUrl: './airplanes.page.html',
  styleUrls: ['./airplanes.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, CardComponent]
})
export class AirplanesPage implements OnInit {

  dataService: AirplaneService = inject(AirplaneService);
  vehiculos: WritableSignal<Vehiculo[]> = signal<Vehiculo[]>([]);
  constructor() { }

  ngOnInit() {
    this.cargarAviones();
  }

  private cargarAviones() {
    this.dataService.getAirplanes().subscribe(
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
