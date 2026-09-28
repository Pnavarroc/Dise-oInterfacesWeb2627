import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {GridGoInicioComponent} from "../../common/grid-go-inicio/grid-go-inicio.component";

@Component({
  selector: 'app-entrenamiento',
  templateUrl: './entrenamiento.page.html',
  styleUrls: ['./entrenamiento.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, GridGoInicioComponent]
})
export class EntrenamientoPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
