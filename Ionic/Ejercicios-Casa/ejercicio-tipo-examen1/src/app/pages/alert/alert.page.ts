import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAlert, IonButton, IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader,
  IonLabel, IonTitle, IonToolbar } from '@ionic/angular';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonButton,
    IonAlert,
    IonLabel,
  ],
})
export class AlertPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);

  nombre = signal<string>('Pablo');

  inputs = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Indique su nombre'
    }
  ]

  buttonsAlertInput = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.showToast('Cancelado', 'danger');
      },
    },
    {
      text: 'Modificar',
      handler: (datos: {nombre:string}) => {
        const nuevoNombre = datos.nombre;
        this.nombre.set(nuevoNombre)
        this.showToast('Nombre modificado a: '+nuevoNombre, 'success');
      },
    },
  ];

  protected buttonsAlert = [
    {
      text: 'Cancelar',
      role: 'cancel',
      handler: () => {
        this.showToast('Cancelado', 'danger');
      },
    },
    {
      text: 'Eliminar',
      handler: () => {
        this.showToast('Agente eliminado', 'danger');
      },
    },
  ];
  constructor() {}

  ngOnInit() {}

  showToast(message: string, color: string) {
    this.toastService.showToast(message, color);
  }
}
