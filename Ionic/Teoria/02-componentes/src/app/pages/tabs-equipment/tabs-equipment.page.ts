import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {ZeldaDataComponent} from "../../components/zelda-data/zelda-data.component";

@Component({
  selector: 'app-tabs-equipment',
  templateUrl: './tabs-equipment.page.html',
  styleUrls: ['./tabs-equipment.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ZeldaDataComponent]
})
export class TabsEquipmentPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
