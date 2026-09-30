import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonFab, IonFabButton, IonFabList, IonHeader, IonIcon, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {add, airplane, boat, carSport} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonFabButton, IonFab, IonIcon, IonFabList, RouterLink]
})
export class InicioPage implements OnInit {

  constructor() {
    addIcons({add, carSport, airplane, boat});
  }

  ngOnInit() {
  }

}
