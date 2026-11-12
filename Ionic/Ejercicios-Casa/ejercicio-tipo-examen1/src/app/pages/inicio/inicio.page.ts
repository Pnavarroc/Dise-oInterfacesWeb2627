import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonButton,
  IonButtons,
  IonCol,
  IonContent, IonFab, IonFabButton,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList, IonMenuToggle,
  IonModal,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { ValorantService } from '../../services/valorant-service';
import { ApiResponse, ValorantAgent } from '../../common/models/Valorant.model';
import { addIcons } from 'ionicons';
import { add, home, menuOutline, planet } from 'ionicons/icons';
import { ToastService } from '../../services/toast-service';
import { MenuLateralComponent } from '../../common/components/menu-lateral/menu-lateral.component';
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
    IonAvatar,
    IonList,
    IonItem,
    IonLabel,
    IonModal,
    IonGrid,
    IonRow,
    IonCol,
    IonFooter,
    IonButtons,
    IonButton,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonIcon,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonMenuToggle,
    MenuLateralComponent,
    IonFab,
    IonFabButton,
    RouterLink,
  ],
})
export class InicioPage implements OnInit {
  private readonly valorantService: ValorantService = inject(ValorantService);
  private readonly toastService: ToastService = inject(ToastService);

  agents = signal<ValorantAgent[]>([]);
  agentsShow = signal<ValorantAgent[]>([]);

  constructor() {
    addIcons({ home, planet, menuOutline, add });
  }

  ngOnInit() {
    this.loadAgents();
  }

  private loadAgents() {
    this.valorantService.getAgents().subscribe({
      next: (res: ApiResponse) => {
        this.agentsShow.set(res.data.slice(0, 20));
        this.agents.set(res.data.slice(20));
      },
    });
  }

  protected showToast(tipo: string, agent: ValorantAgent) {
    if (tipo === 'home') {
      this.toastService.showToast('Display name: ' + agent.displayName, 'danger');
    }
    if (tipo === 'planet') {
      this.toastService.showToast('Developer name: ' + agent.developerName, 'success');
    }
  }

  protected loadMore(event: InfiniteScrollCustomEvent) {
    const siguientes = this.agents().slice(0, 5);

    this.agentsShow.update((actuales) => [...actuales, ...siguientes]);

    this.agents.update((pendientes) => pendientes.slice(5));

    event.target.complete();
  }
}
