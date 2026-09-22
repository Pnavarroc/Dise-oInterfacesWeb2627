import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {
  IonAvatar,
  IonBackButton,
  IonButton,
  IonButtons,
  IonHeader, IonImg,
  IonMenuToggle,
  IonTitle,
  IonToolbar
} from "@ionic/angular";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  imports: [
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButtons,
    IonBackButton,
    IonMenuToggle,
    IonButton,
    IonAvatar,
    IonImg
  ],
})
export class HeaderComponentComponent  implements OnInit {

  titulo: ModelSignal<string> = model.required();

  constructor() { }

  ngOnInit() {}

}
