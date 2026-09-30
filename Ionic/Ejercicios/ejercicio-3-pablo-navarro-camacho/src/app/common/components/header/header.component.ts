import {Component, model, ModelSignal, OnInit} from '@angular/core';
import {IonHeader, IonIcon, IonTitle, IonToolbar} from "@ionic/angular";
import {addIcons} from "ionicons";
import {home} from "ionicons/icons";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonIcon,
    RouterLink
  ],
})
export class HeaderComponent  implements OnInit {

  title: ModelSignal<string> = model.required()
  color: ModelSignal<string> = model.required()
  constructor() {
    addIcons({home})
  }

  ngOnInit() {}

}
