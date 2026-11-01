import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, Signal } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItemSliding, IonItem, IonAvatar, IonImg, IonLabel,
  IonModal, IonFooter, IonButtons, IonButton, IonItemOptions, IonItemOption, IonIcon, IonInfiniteScroll,
  IonInfiniteScrollContent
} from '@ionic/angular';
import { ValorantService } from '../services/valorant-service';
import { ValorantAgent } from '../interfaces/valorant-agent';
import {addIcons} from "ionicons";
import { home, planet } from 'ionicons/icons';
import {ToastService} from "../services/toast-service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItemSliding,
    IonItem,
    IonAvatar,
    IonLabel,
    IonModal,
    IonFooter,
    IonButtons,
    IonButton,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
  ],
})
export class HomePage implements OnInit {
  private readonly valorantService: ValorantService = inject(ValorantService);
  private readonly toastService: ToastService = inject(ToastService);

  agents = signal<ValorantAgent[]>([]);
  agentsAux: ValorantAgent[] = [];

  constructor() {
    addIcons({ home, planet });
  }

  ngOnInit() {
    this.loadAgents();
  }

  loadAgents() {
    this.valorantService.getAgents().subscribe({
      next: (response) => {
        this.agentsAux = [...response.data];
        this.agents.set(this.agentsAux.splice(0, 20));
      },
      error: (error) => {
        console.log(error);
      },
      complete: () => {
        console.log('Agents loaded');
      },
    });
  }

  protected loadMore(event: any) {
    this.agents.update((data) => [...data, ...this.agentsAux.splice(0, 5)]);
    event.target.complete();
  }

  protected infoHouse($event: PointerEvent, developerName: string) {
    this.toastService.mostrarToast('Display name:' + developerName, 2000, 'danger', 'middle');
  }

  protected infoPlanet($event: PointerEvent, developerName: string) {
    this.toastService.mostrarToast('Developer name:' + developerName, 2000, 'success', 'middle');
  }
}
