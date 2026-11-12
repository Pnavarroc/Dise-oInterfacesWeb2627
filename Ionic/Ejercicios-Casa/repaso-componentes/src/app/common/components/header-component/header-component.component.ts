import type { OnInit } from '@angular/core';
import { Component, input } from '@angular/core';
import { IonButton, IonHeader, IonIcon, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/angular';
import { MenuComponent } from '../menu/menu.component';


@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.scss'],
  imports: [IonHeader, IonToolbar, IonIcon, IonTitle, IonButton, IonMenuToggle, MenuComponent],
})
export class HeaderComponentComponent implements OnInit {
  //Titulo requerido
  title = input.required<string>();
  icon = input.required<string>();

  constructor() {}

  ngOnInit() {}
}
