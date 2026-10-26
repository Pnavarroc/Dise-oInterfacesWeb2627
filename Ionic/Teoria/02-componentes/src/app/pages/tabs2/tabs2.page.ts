import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent, IonHeader, IonIcon, IonTabBar, IonTabButton, IonTabs, IonTitle, IonToolbar} from '@ionic/angular';
import {addIcons} from "ionicons";
import {hammer, paw, shield} from "ionicons/icons";

@Component({
  selector: 'app-tabs2',
  templateUrl: './tabs2.page.html',
  styleUrls: ['./tabs2.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonTabs, IonTabBar, IonTabButton, IonIcon]
})
export class Tabs2Page implements OnInit {

  constructor() {
    addIcons({paw, hammer, shield});
  }

  ngOnInit() {
  }

}
