import { Component, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { settings } from 'ionicons/icons';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonLabel, IonIcon],
})
export class MenuLateralComponent implements OnInit {
  constructor() {
    addIcons({settings})
  }

  ngOnInit() {}
}
