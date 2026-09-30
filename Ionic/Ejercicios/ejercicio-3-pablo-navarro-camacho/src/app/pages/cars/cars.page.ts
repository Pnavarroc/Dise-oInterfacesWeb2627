import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {HeaderComponent} from "../../common/components/header/header.component";
import {CarService} from "../../services/car-service";
import {Vehiculo} from "../../common/interfaces/vehiculo";
import {CardComponent} from "../../common/components/card/card.component";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.page.html',
  styleUrls: ['./cars.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, CardComponent]
})
export class CarsPage implements OnInit {

  dataService: CarService = inject(CarService);
  vehiculos: WritableSignal<Vehiculo[]> = signal<Vehiculo[]>([]);
  constructor() { }

  ngOnInit() {
    this.cargarCoches();
  }

  private cargarCoches() {
    this.dataService.getCars().subscribe(
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
