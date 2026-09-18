import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import {InicioPage} from "./pages/inicio/inicio.page";
import {addCircle, carOutline} from "ionicons/icons";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, InicioPage],
})
export class AppComponent {
  constructor() {
    addIcons({addCircle, carOutline});
  }
}
