import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonButton,
    IonItem,
    IonIcon,
    IonLabel,
    RouterLink,
  ],
})
export class MenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
