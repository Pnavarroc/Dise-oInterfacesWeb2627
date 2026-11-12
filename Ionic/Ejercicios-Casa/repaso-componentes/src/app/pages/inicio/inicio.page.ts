import type { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonCard, IonCardContent, IonCardHeader,
  IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonFab,
  IonFabButton, IonFabList, IonHeader, IonIcon, IonLabel, IonRow, IonTitle, IonToolbar } from '@ionic/angular';
import { HeaderComponentComponent } from '../../common/components/header-component/header-component.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponentComponent,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonIcon,
    IonCardContent,
    IonLabel,
    IonButton,
    RouterLink,
    IonFab,
    IonFabButton,
    IonFabList,
  ],
})
export class InicioPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
