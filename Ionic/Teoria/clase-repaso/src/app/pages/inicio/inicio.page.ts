import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar, IonButton, IonChip, IonContent, IonHeader, IonImg, IonItem,
  IonLabel, IonList, IonListHeader, IonThumbnail, IonTitle, IonToolbar } from '@ionic/angular';
import { DogService } from '../../services/dog-service';
import { DogModel } from '../../common/models/dog.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButton,
    RouterLink,
    IonList,
    IonListHeader,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonChip,
    IonAvatar,
  ],
})
export class InicioPage implements OnInit {
  private readonly dogService: DogService = inject(DogService);

  dog = signal<DogModel>({ message: '', status: 'success' });
  constructor() {}

  ngOnInit() {
    this.loadDog();
  }

  protected loadDog() {
    this.dogService.getDog().subscribe({
      next: (res) => {
        this.dog.set(res);
      },
    });
  }
}
