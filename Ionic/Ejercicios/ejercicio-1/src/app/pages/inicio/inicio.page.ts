import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonButton, IonContent, IonHeader, IonMenu, IonMenuToggle, IonTitle, IonToolbar} from '@ionic/angular';
import {HeaderComponent} from "../../common/header/header.component";
import {RouterLink} from "@angular/router";
import {PlusPage} from "../plus/plus.page";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonMenu, IonMenuToggle, IonButton, RouterLink]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  protected readonly PlusPage = PlusPage;
}
