import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {GridGoInicioComponent} from "../../common/grid-go-inicio/grid-go-inicio.component";

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, GridGoInicioComponent, IonLabel, IonGrid, IonRow, IonCol, IonChip, IonButton]
})
export class EntrenamientoPage implements OnInit {


  energia= signal(5);

  estado = signal<EstadoEnergia>( {texto: "Listo para entrenar", color: "green"});

  constructor() { }

  ngOnInit() {
  }

  entrenar(energia: number){
    if (energia >=2){
      this.energia.set(energia-2);
      this.definirEstado(this.energia());
    }else {
      return alert("No tienes suficiente energía");
    }
  }

  descansar(energia: number){
    if (energia<=4){
      this.energia.set(energia+1);
      this.definirEstado(this.energia());
    }else{
      return alert("Los puntos de energia máximos son 5 no puedes descansar mas");
    }
  }
  reiniciar(){
    this.energia.set(5)
    this.definirEstado(this.energia());
  }

  //Reglas para energía y estado
  /*
  *Energía	Texto	Color
  4–5	Listo para entrenar	Verde
   2–3	Empiezas a estar cansado	Naranja
  0–1	Necesitas descansar	Rojo
  *
  * Asi que usaremos un switch case
  * */

  definirEstado(energia: number){
    switch (energia) {
      case 5:
      case 4:
        // Agrupar los casos que hacen lo mismo evita repetir código
        this.estado.set({ texto: "Listo para entrenar", color: "green" });
        break;
      case 3:
      case 2:
        this.estado.set({ texto: "Empiezas a estar cansado", color: "orange" });
        break;
      case 1:
      case 0:
        this.estado.set({ texto: "Necesitas descansar", color: "red" });
        break;
    }
  }


}

interface EstadoEnergia {
  texto: string;
  color: string;
}

