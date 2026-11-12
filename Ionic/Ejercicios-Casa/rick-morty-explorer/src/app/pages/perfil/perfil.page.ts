import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonCol, IonContent, IonGrid, IonHeader, IonLabel, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { HeaderComponent } from '../../common/components/header/header.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonAvatar,
    IonLabel,
    IonText,
    IonButton,
  ],
})
export class PerfilPage implements OnInit {
  constructor() {}

  ngOnInit() {}
}
