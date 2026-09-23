import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonChip,
  IonAvatar,
  IonLabel,
  IonAlert, AlertInput, AlertButton
} from '@ionic/angular';
import {GridHomeComponent} from "../../common/grid-home/grid-home.component";

@Component({
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonLabel, IonAvatar, IonChip, IonCol, IonRow, IonGrid, GridHomeComponent, IonAlert]
})
export class MorePage implements OnInit {
  resultado = signal('LOSE');
  chipSeleccionado: string = '';
  opciones: AlertInput[] = [
    {
      label: 'True',
      type: 'radio',
      value: 'true'
    },
    {
      label: 'False',
      type: 'radio',
      value: 'false'
    }
  ];

  botones: AlertButton[] = [
    {
      text: 'CANCEL',
      role: 'cancel'
    },
    {
      text: 'OK',
      handler: (valor) => {
        if (valor !== 'true' && valor !== 'false') {
          return false; // Mantiene abierto el alert si no se elige
        }

        //Método que comprueba que chip se ha seleccionado y devuelve win o lose
        this.comprobarRespuesta(valor);
        return true;
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  private comprobarRespuesta(valor: string) {
    this.resultado.set(
      valor === this.chipSeleccionado ? 'WIN' : 'LOSE'
    );
  }
}
