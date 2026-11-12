import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, homeOutline, leafOutline, menuOutline, personCircleOutline, personOutline } from 'ionicons/icons';
import { MenuComponent } from './common/components/menu/menu.component';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet, MenuComponent],
})
export class AppComponent {
  constructor() {
    addIcons({ homeOutline, leafOutline, personCircleOutline, menuOutline, add, personOutline });
  }
}
