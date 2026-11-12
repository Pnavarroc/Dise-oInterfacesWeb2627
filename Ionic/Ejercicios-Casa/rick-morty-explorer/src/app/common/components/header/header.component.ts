import { Component, input, OnInit } from '@angular/core';
import {IonButton, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { home } from 'ionicons/icons';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonIcon, RouterLink, IonButton],
})
export class HeaderComponent implements OnInit {
  title = input.required<string>();
  constructor() {
    addIcons({ home });
  }

  ngOnInit() {}
}
