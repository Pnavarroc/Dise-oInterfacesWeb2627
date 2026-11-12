import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle,
  IonCardTitle, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { ValorantService } from '../../services/valorant-service';
import { ApiResponse, ValorantAgent } from '../../common/models/Valorant.model';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-slides',
  templateUrl: './slides.page.html',
  styleUrls: ['./slides.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
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
    IonCardHeader,
    IonCardContent,
    IonLabel,
    IonCardTitle,
  ],
})
export class SlidesPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);

  protected showToast(agent: ValorantAgent) {
    this.toastService.showToast('Display name: ' + agent.displayName, 'success');
  }
  private readonly valorantService: ValorantService = inject(ValorantService);
  agents = signal<ValorantAgent[]>([]);
  constructor() {}

  ngOnInit() {
    this.loadAgents();
  }

  private loadAgents() {
    this.valorantService.getAgents().subscribe({
      next: (res: ApiResponse) => {
        this.agents.set(res.data.slice(0, 6));
      },
    });
  }
}
