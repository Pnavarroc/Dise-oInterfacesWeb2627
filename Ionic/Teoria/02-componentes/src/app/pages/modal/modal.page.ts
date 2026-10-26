import {Component, OnInit, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonButton, IonButtons,
  IonContent,
  IonHeader, IonInput, IonItem,
  IonItemDivider, IonLabel, IonList,
  IonListHeader,
  IonModal,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

export interface User{
  nombre: string,
  email: string,
  ciudad: string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonButton, IonItemDivider, IonModal, IonListHeader, IonButtons, IonItem, IonInput, IonLabel, IonList]
})
export class ModalPage{

  @ViewChild(IonModal) modal!: IonModal;

  usuario = {nombre: '', email: '', ciudad: ''};
  message = 'Abra el modal y rellene los datos';
  constructor() { }


  protected onWillDismiss(event: CustomEvent) {
    const ev = event as CustomEvent;
    if(ev.detail.role === 'confirm')
    {
      this.message = "Hola, " + ev.detail.data;
    }
  }

  protected cancel() {
    this.modal.dismiss(null, "cancel");
  }

  protected onSubmitTemplate() {
    this.modal.dismiss(this.usuario.nombre, "confirm");
  }
}
