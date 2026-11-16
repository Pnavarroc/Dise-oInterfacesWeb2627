import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonActionSheet, IonAvatar, IonButton, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { airplaneOutline, alarmOutline, alertOutline, closeOutline } from 'ionicons/icons';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonButton,
    IonActionSheet,
  ],
})
export class ActionSheetPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);
  foto = signal<string>('assets/icon/favicon.png');
  constructor() {
    addIcons({ airplaneOutline, alarmOutline, alertOutline, closeOutline });
  }

  ngOnInit() {}

  protected actionSheetButtons = [
    {
      text: 'Cambiar a avatar 1',
      icon: 'airplane-outline',
      handler: () => {
        this.foto.set('assets/icon/favicon.png');
        this.showToast('Avatar cambiado a 1', 'success');
      },
    },
    {
      text: 'Cambiar a avatar 2',
      icon: 'alarm-outline',
      handler: () => {
        this.foto.set('assets/shapes.svg');
        this.showToast('Avatar cambiado a 2', 'primary');
      },
    },
    {
      text: 'Cambiar a avatar 3',
      icon: 'alert-outline',
      handler: () => {
        this.foto.set('assets/AmongUs.jpg');
        this.showToast('Avatar cambiado a 3', 'tertiary');
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      icon: 'close-outline',
      handler: () => {
        this.showToast('Cancelado', 'danger');
      },
    },
  ];
  showToast(message: string, color: string) {
    this.toastService.showToast(message, color);
  }
}
