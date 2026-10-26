import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular';
import {ZeldaDataComponent} from "../../components/zelda-data/zelda-data.component";

@Component({
  selector: 'app-tabs-creatures',
  templateUrl: './tabs-creatures.page.html',
  styleUrls: ['./tabs-creatures.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, ZeldaDataComponent]
})
export class TabsCreaturesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
