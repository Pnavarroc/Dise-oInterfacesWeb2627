import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonRouterLink,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [RouterLink, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton, IonCol, IonGrid, IonRouterLink, IonRow]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
