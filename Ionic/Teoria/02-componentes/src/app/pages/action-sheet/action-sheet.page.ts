import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  ActionSheetButton,
  IonActionSheet,
  IonButton,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";
import {addIcons} from "ionicons";
import {caretForward, caretForwardCircle, heart, playCircle, shareSocial, trash} from "ionicons/icons";

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonButton, IonActionSheet]
})
export class ActionSheetPage implements OnInit {
  protected aSButtons: (ActionSheetButton)[] =
    [
      {
        text: "Delete",
        role: "destructive",
        icon: "trash",
        handler: () => {
          console.log("Delete clicked");
        }
      },
      {
        text: "share",
        icon: "share-social",
        handler: () => {
          console.log("share clicked");
        }
      },
      {
        text: "Favorite",
        icon: "heart",
        handler: () => {
          console.log("favorite clicked");
        }
      },
      {
        text: "Play",
        icon: "caret-forward-circle",
        handler: () => {
          console.log("Play clicked");
        }
      },
      {
        text: "Cancel",
        role: "cancel",
        icon: "close",
        handler: () => {
          console.log("cancel clicked");
        }
      },

    ]

  constructor() {
    addIcons({trash, caretForward, shareSocial, playCircle, caretForwardCircle, heart})
  }

  ngOnInit() {
  }

}
