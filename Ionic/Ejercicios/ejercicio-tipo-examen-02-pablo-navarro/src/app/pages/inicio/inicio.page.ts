import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem,
  IonLabel, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { power } from 'ionicons/icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonText,
    IonButton,
    RouterLink,
  ],
})
export class InicioPage implements OnInit {
  // 1. Instalar swiper

  // 2. crear un array con las imagenes y descripciones

  slides: { image: string; description: string; textColor: string }[] = [
    {
      image: 'assets/images/ionicLogo.jpg',
      description: 'En este examen utilizaremos componentes de ionic',
      textColor: 'primary',
    },
    {
      image: 'assets/images/link.jpg',
      description: 'Pero trabajaremos con la api de zelda',
      textColor: 'secondary',
    },
    {
      image: 'assets/images/approved.png',
      description: 'Para lograr el ansiado aprobado',
      textColor: 'success',
    },
  ];

  constructor() {
    addIcons({power});
  }

  ngOnInit() {}
}
