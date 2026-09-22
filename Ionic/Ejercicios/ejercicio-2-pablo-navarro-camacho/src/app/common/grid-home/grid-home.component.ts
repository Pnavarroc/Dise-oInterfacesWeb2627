import { Component, OnInit } from '@angular/core';
import {IonAvatar, IonChip, IonCol, IonContent, IonGrid, IonLabel, IonRow} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-grid-home',
  templateUrl: './grid-home.component.html',
  styleUrls: ['./grid-home.component.scss'],
  imports: [
    IonContent,
    IonGrid,
    IonAvatar,
    IonChip,
    IonCol,
    IonLabel,
    IonRow,
    RouterLink
  ],
})
export class GridHomeComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
