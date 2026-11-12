import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu,
  IonMenuToggle, IonModal, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/angular';
import { ZeldaService } from '../../services/zelda-service';
import { ZeldaModel } from '../../common/models/zelda-model';
import { addIcons } from 'ionicons';
import { power } from 'ionicons/icons';
import { MenuLateralComponent } from '../../common/components/menu-lateral/menu-lateral.component';
import {ToastService} from "../../services/toast-service";

@Component({
  selector: 'app-listas',
  templateUrl: './listas.page.html',
  styleUrls: ['./listas.page.scss'],
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
    IonText,
    IonMenuToggle,
    IonMenu,
    MenuLateralComponent,
    IonModal,
    IonButtons,
    IonRow,
    IonCol,
  ],
})
export class ListasPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);
  private readonly zeldaService: ZeldaService = inject(ZeldaService);

  materials = signal<ZeldaModel[]>([]);
  number = signal<number>(0);
  constructor() {
    addIcons({ power });
  }

  ngOnInit() {
    this.loadMaterials();
  }

  private loadMaterials() {
    this.zeldaService.getMaterials().subscribe({
      next: (materials) => {
        this.materials.set(materials.data);
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  protected randomNumber() {
    this.number.set(Math.floor(Math.random() * this.materials().length ));
  }

  protected mostrarCancel() {
    this.toastService.showToast('Cancelado', 'bottom', 'danger', 2000);
  }
  protected mostrarAceptar(num: number) {
    this.toastService.showToast('Aceptado: '+this.materials()[num].name, 'bottom', 'primary', 2000);
  }
}
