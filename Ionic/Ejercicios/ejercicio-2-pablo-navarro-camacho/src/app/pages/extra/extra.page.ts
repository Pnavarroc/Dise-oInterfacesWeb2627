import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader, IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {RouterLink} from "@angular/router";
import {GridHomeComponent} from "../../common/grid-home/grid-home.component";

@Component({
  selector: 'app-extra',
  templateUrl: './extra.page.html',
  styleUrls: ['./extra.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonButton, RouterLink, IonChip, IonAvatar, IonLabel, GridHomeComponent]
})
export class ExtraPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
