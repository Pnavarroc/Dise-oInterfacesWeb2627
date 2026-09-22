import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  AlertButton,
  AlertInput,
  IonAlert,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonButton, IonAlert]
})


export class AlertPage implements OnInit {
  botonesAlert:AlertButton[] = [
    {
      text: "cancel",
      role: "cancel",
      cssClass: "secondary",
      handler:()=>{
        console.log("Cancel")
      }
    },
    {
      text: "Ok",
      handler:()=>{
        console.log("Clicked")
      }
    }
  ]
  protected botonesInput: AlertInput[] =[
    {
      name: "nombre",
      type: "text",
      placeholder: "Inserte su nombre",


    }
  ];
  protected inputs: AlertInput[] = [
  ];
  constructor() { }

  ngOnInit() {
  }

}
