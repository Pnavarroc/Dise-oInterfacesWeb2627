import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard, IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";
import {addIcons} from "ionicons";
import {pin} from "ionicons/icons";

@Component({
  selector: 'app-card',
  templateUrl: './card.page.html',
  styleUrls: ['./card.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonIcon, IonLabel]
})
export class CardPage implements OnInit {

  constructor() {
    addIcons({pin})
  }

  ngOnInit() {
  }

}
