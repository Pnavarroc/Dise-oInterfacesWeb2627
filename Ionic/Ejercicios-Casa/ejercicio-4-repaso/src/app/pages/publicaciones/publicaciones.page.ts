import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonCard,
  IonCardContent,
  IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader,
  IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { PublicacionesService } from '../../services/publicaciones-service';
import { Publicacion } from '../../common/models/Publicaciones.mode';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.page.html',
  styleUrls: ['./publicaciones.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonLabel,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonCardTitle,
  ],
})
export class PublicacionesPage implements OnInit {
  private readonly publicacionesService: PublicacionesService = inject(PublicacionesService);
  publicaciones = signal<Publicacion[]>([]);
  publicacionesShow = signal<Publicacion[]>([]);

  constructor() {}

  ngOnInit() {
    this.loadPublicaciones();
  }

  private loadPublicaciones() {
    this.publicacionesService.getPublicaciones().subscribe({
      next: (res) => {
        this.publicacionesShow.set(res.slice(0, 15));
        this.publicaciones.set(res.slice(15));
      },
    });
  }

  protected async loadMore(event: InfiniteScrollCustomEvent) {
    const siguientes = this.publicaciones().slice(0, 10);
    this.publicacionesShow.update((actuales) => [...actuales, ...siguientes]);
    this.publicaciones.update((pendientes) => pendientes.slice(10));
    await event.target.complete();
  }
}
