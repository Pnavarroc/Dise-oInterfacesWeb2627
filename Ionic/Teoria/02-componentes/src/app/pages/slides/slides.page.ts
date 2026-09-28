import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonCard, IonCardHeader, IonCardTitle, IonCardContent]
})
export class SlidesPage implements OnInit {

  slides:{img: string; titulo: string; descripcion: string}[] =[
    {
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToB_7hyguK_OxKGZJd7nScyZBUWNJwAc7wMOeFlazVBg&s=10',
      titulo: 'Comparte fotos',
      descripcion: 'Mira y comparte tus fotos'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/8250/8250443.png',
      titulo: 'Escucha música',
      descripcion: 'Toda tu música favorita está aqui'
    },
    {
      img: 'https://cdn-icons-png.flaticon.com/512/2858/2858429.png',
      titulo: 'Calendario',
      descripcion: 'Aqui tienes tu calendario'
    },
  ]

  constructor() { }

  ngOnInit() {
  }

}
