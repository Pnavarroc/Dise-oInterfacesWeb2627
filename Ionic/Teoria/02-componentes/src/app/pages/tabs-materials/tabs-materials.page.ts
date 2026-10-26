import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {ZeldaDataComponent} from "../../components/zelda-data/zelda-data.component";

@Component({
  selector: 'app-tabs-materials',
  templateUrl: './tabs-materials.page.html',
  styleUrls: ['./tabs-materials.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ZeldaDataComponent]
})
export class TabsMaterialsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
