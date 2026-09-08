import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';

@Component({
  selector: 'app-primera-pagina',
  templateUrl: './primera-pagina.page.html',
  styleUrls: ['./primera-pagina.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrimeraPaginaPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
