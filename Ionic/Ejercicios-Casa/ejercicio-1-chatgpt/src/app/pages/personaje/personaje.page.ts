import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetButton,
  IonActionSheet,
  IonAvatar, IonButton,
  IonChip,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonLabel,
  IonRow,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {GridGoInicioComponent} from "../../common/grid-go-inicio/grid-go-inicio.component";

@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.page.html',
  styleUrls: ['./personaje.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonGrid, IonRow, IonCol, IonAvatar, IonChip, IonLabel, IonButton, IonActionSheet, GridGoInicioComponent]
})
export class PersonajePage implements OnInit {

  character = signal<Character>({
    'avatar': 'assets/images/anime01.jpg',
    'role': 'Guerrero',
    'description': 'Especialista en combate cercano.'
  });

  protected SelectCharacter: (ActionSheetButton)[] = [
    {
      text: 'Guerrero',
      handler: () => {
        this.character.set({
          avatar : 'assets/images/anime01.jpg',
          role : 'Guerrero',
          description : 'Especialista en combate cercano.'
        });
        console.log('Clase Guerrero selected');
      }
    },
    {
      text: 'Mago',
      handler: () => {
        console.log('Clase Mago selected');
        this.character.set({
          avatar : 'assets/images/anime02.jpg',
          role : 'Mago',
          description : 'Especialista en ataques mágicos.'
        });
      }
    },
    {
      text: 'Arquero',
      handler: () => {
        console.log('Clase Arquero selected');
        this.character.set({
          avatar : 'assets/images/anime03.jpg',
          role : 'Arquero',
          description : 'Especialista en ataques a distancia.'
        });
      }
    },
    {
      text: 'cancel',
      role: 'cancel',
      handler: ()=> {
        console.log('Cancel selected');
      }
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}


export interface Character{
  avatar: string,
  role: string,
  description: string
}
