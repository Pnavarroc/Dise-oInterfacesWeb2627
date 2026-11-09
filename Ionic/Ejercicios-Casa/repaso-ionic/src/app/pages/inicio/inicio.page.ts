import { Component, effect, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonCol, IonContent,
  IonFooter, IonHeader, IonIcon, IonItem, IonLabel, IonList,
  IonMenuToggle, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { informationCircleOutline } from 'ionicons/icons';
import { ZeldaService } from '../../services/zelda-service';
import { ZeldaMaterial } from '../../common/interfaces/zelda-model';
import { ToastService } from '../../services/toast-service';
import { MenuComponent } from '../../common/menu/menu.component';

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
    IonButton,
    IonIcon,
    IonList,
    IonItem,
    IonLabel,
    IonFooter,
    IonModal,
    IonText,
    IonRow,
    IonCol,
    IonMenuToggle,
    MenuComponent,
  ],
})
export class InicioPage implements OnInit {
  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  private readonly toastService: ToastService = inject(ToastService);

  protected materials = signal<ZeldaMaterial[]>([]);

  constructor() {
    addIcons({ informationCircleOutline });
  }

  ngOnInit() {
    this.loadMaterials();
  }

  private loadMaterials() {
    this.zeldaService.getMaterials().subscribe({
      next: (response) => {
        this.materials.set(response.data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected showMessage() {
    this.toastService.showToast(
      'Hay ' + this.materials().length + ' materiales disponibles',
      'bottom',
      2000,
      'primary',
    );
  }

  protected showName(name: string) {
    this.toastService.showToast('Has seleccionado: ' + name, 'top', 1500, 'success');
  }
}
