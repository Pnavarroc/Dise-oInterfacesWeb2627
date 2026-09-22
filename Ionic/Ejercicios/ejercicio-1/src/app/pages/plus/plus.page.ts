import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonMenuToggle, IonTitle, IonToolbar} from '@ionic/angular';
import {HeaderComponent} from "../../common/header/header.component";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-plus',
  templateUrl: './plus.page.html',
  styleUrls: ['./plus.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonButton, IonMenuToggle, RouterLink]
})
export class PlusPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
