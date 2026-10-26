import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonBadge,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

@Component({
  selector: 'app-infinite2',
  templateUrl: './infinite2.page.html',
  styleUrls: ['./infinite2.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonList, IonItem, IonAvatar, IonLabel, IonBadge]
})
export class Infinite2Page implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
