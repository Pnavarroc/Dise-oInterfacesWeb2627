import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAlert,
  IonButton, IonCard,
  IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonLabel, IonRow,
  IonText, IonTitle } from '@ionic/angular';
import { HeaderComponent } from '../../common/components/header/header.component';
import { RMService } from '../../services/rmservice';
import { ApiResponse, RMCharacter } from '../../common/models/RMModel';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.page.html',
  styleUrls: ['./personajes.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponent,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonTitle,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonLabel,
    IonText,
    IonButton,
    IonAlert,
  ],
})
export class PersonajesPage implements OnInit {
  private readonly rmService: RMService = inject(RMService);

  characters = signal<RMCharacter[]>([]);

  constructor() {}

  ngOnInit() {
    //this.loadCharacters();
  }

  protected loadCharacters() {
    this.rmService.getCharacters().subscribe({
      next: (res: ApiResponse) => {
        this.characters.set(res.results);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected loadAlives() {
    this.rmService.getCharacters().subscribe({
      next: (res: ApiResponse) => {
        this.characters.set(res.results.filter((char) => char.status === 'Alive'));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected loadDeads() {
    this.rmService.getCharacters().subscribe({
      next: (res: ApiResponse) => {
        this.characters.set(res.results.filter((char) => char.status === 'Dead'));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  botonesAlert = [
    {
      text: 'Cerrar',
      role: 'cancel',
    },
  ];
}
