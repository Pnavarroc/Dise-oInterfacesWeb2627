import {Component, CUSTOM_ELEMENTS_SCHEMA, model, ModelSignal, OnInit} from '@angular/core';
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, IonContent,
  IonHeader, IonLabel,
  IonTitle
} from "@ionic/angular";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonHeader,
    IonTitle,
    IonButton,
    IonContent,
    IonLabel,
    CurrencyPipe
  ],
})
export class CardComponent  implements OnInit {

  color: ModelSignal<string> = model.required();

  name: ModelSignal<string> = model.required();
  model: ModelSignal<string> = model.required();
  motor: ModelSignal<string> = model.required();
  price: ModelSignal<number> = model.required();



  constructor() { }

  ngOnInit() {}

}
