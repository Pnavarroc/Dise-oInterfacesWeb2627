import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonTitle, IonToolbar, IonAvatar,
  IonLabel, IonButtons, IonBackButton, IonMenuToggle, IonButton, IonImg, IonChip, IonList, IonItem
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonAvatar,
    IonLabel, HeaderComponentComponent, IonButtons, IonBackButton, IonMenuToggle, IonButton, IonImg, IonChip, IonList, IonItem]
})
export class AvatarPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
