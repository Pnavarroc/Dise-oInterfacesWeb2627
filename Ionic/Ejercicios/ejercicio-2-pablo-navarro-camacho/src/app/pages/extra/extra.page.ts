import { Component, OnInit, signal  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetButton,
  IonActionSheet,
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
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonButton, RouterLink, IonChip, IonAvatar, IonLabel, GridHomeComponent, IonActionSheet]
})
export class ExtraPage implements OnInit {

  imageAvatar1 = signal('/assets/images/anime01.jpg');
  imageAvatar2 = signal('/assets/images/anime02.jpg');
  imageAvatar3 = signal('/assets/images/anime03.jpg');
  protected SelectFauvorite: ActionSheetButton[] = [
    {
      text: 'Default',
      handler: () => {
        this.imageAvatar1.set('/assets/images/anime01.jpg');
        this.imageAvatar2.set('/assets/images/anime02.jpg');
        this.imageAvatar3.set('/assets/images/anime03.jpg');
      }
    },
    {
      text: 'Mary',
      handler: () => {
        this.imageAvatar1.set('/assets/images/anime01.jpg');
        this.imageAvatar2.set('/assets/images/anime01.jpg');
        this.imageAvatar3.set('/assets/images/anime01.jpg');
      }
    },
    {
      text: 'Lisa',
      handler: () => {
        this.imageAvatar1.set('/assets/images/anime02.jpg');
        this.imageAvatar2.set('/assets/images/anime02.jpg');
        this.imageAvatar3.set('/assets/images/anime02.jpg');
      }
    },
    {
      text: 'John',
      handler: () => {
        this.imageAvatar1.set('/assets/images/anime03.jpg');
        this.imageAvatar2.set('/assets/images/anime03.jpg');
        this.imageAvatar3.set('/assets/images/anime03.jpg');
      }
    },
    {
      text: 'Cancel',
      role: 'cancel'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
