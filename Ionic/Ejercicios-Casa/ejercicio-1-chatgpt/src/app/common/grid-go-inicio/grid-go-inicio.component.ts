import { Component, OnInit } from '@angular/core';
import {IonButton, IonCol, IonContent, IonGrid, IonRow} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid-go-inicio',
  templateUrl: './grid-go-inicio.component.html',
  styleUrls: ['./grid-go-inicio.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton,
    RouterLink,

  ],
})
export class GridGoInicioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
