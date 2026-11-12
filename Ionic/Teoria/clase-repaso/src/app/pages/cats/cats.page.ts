import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItemDivider, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { DogService } from '../../services/dog-service';
import { addIcons } from 'ionicons';
import { snowOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.page.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  styleUrls: ['./cats.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    RouterLink,
    IonCard,
    IonCardContent,
    IonItemDivider,
    IonIcon,
  ],
})
export class CatsPage implements OnInit {
  private readonly dogService: DogService = inject(DogService);
  constructor() {
    addIcons({snowOutline})
  }

  ngOnInit() {}
}
