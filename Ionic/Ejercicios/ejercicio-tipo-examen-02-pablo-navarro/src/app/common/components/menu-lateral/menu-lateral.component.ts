import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonText } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { cogOutline, settingsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss'],
  imports: [IonMenu, IonHeader, IonAvatar, IonContent, IonList, IonItem, IonLabel, IonText, IonIcon],
})
export class MenuLateralComponent implements OnInit {
  constructor() {
    addIcons({cogOutline, settingsOutline})
  }

  ngOnInit() {}
}
