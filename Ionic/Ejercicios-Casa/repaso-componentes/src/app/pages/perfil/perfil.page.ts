import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertButton,
  AlertInput,
  IonActionSheet, IonAlert, IonAvatar, IonButton, IonContent, IonHeader, IonLabel, IonTitle, IonToolbar
} from '@ionic/angular';
import { HeaderComponentComponent } from '../../common/components/header-component/header-component.component';
import {ToastService} from "../../services/toast-service";


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponentComponent,
    IonAvatar,
    IonLabel,
    IonActionSheet,
    IonButton,
    IonAlert,
  ],
})
export class PerfilPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);

  imagen = signal<string>('assets/anime01.jpg');
  nombre = signal<string>('Pablo Navarro');

  protected actionSheetButtons = [
    {
      text: 'Avatar 1',
      handler: () => {
        this.imagen.set('assets/anime01.jpg');
        this.mostrarMensaje('Has cambiado al avatar 1');
      },
    },
    {
      text: 'Avatar 2',
      handler: () => {
        this.imagen.set('assets/anime02.jpg');
        this.mostrarMensaje('Has cambiado al avatar 2');
      },
    },
    {
      text: 'Avatar 3',
      handler: () => {
        this.imagen.set('assets/anime03.jpg');
        this.mostrarMensaje('Has cambiado al avatar 3');
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
    },
  ];

  mostrarMensaje(mensaje: string) {
    this.toastService.showToast(mensaje, 'middle', 'success', 2000);
  }

  constructor() {}

  ngOnInit() {}

  protected inputs = [
    {
      name: 'nombre',
      type: 'text',
      placeholder: 'Placeholder',
    },
  ];
  protected botonesInput = [
    {
      text: 'Cancelar',
      role: 'cancel',
    },
    {
      text: "guardar",
      handler: (data: {nombre: string})=>{
        const nuevoNombre = data.nombre.trim();
        if(nuevoNombre === '') return false;

        this.nombre.set(nuevoNombre);
        this.mostrarMensaje('Nombre actualizado');
        return true;
      }
    }
  ];
}
