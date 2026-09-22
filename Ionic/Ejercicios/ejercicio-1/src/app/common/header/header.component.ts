import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular";
import {addIcons} from "ionicons";
import {carOutline} from "ionicons/icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon
  ],
})
export class HeaderComponent  implements OnInit {

  titulo: ModelSignal<string> = model.required<string>();
  icono: ModelSignal<string> = model.required<string>();
  constructor() {
    addIcons({carOutline});
  }

  ngOnInit() {}


}
