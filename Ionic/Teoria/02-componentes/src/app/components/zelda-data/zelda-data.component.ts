import {Component, inject, input, OnInit, signal} from '@angular/core';
import {DataService} from "../../services/data-service";
import {ZeldaData} from "../../common/models/celda.model";
import {ToastService} from "../../services/toast-service";
import {
  IonAvatar, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
  IonContent,
  IonHeader,
  IonIcon, IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonModal, IonSkeletonText,
  IonToolbar
} from "@ionic/angular";
import {SlicePipe} from "@angular/common";
import {addIcons} from "ionicons";
import {heart, heartHalfOutline, heartOutline} from "ionicons/icons";

@Component({
  selector: 'app-zelda-data',
  templateUrl: './zelda-data.component.html',
  styleUrls: ['./zelda-data.component.scss'],
  imports: [
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    SlicePipe,
    IonIcon,
    IonModal,
    IonContent,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonSkeletonText,
    IonImg
  ],
})
export class ZeldaDataComponent  implements OnInit {

  category = input.required<string>();
  private readonly dataService: DataService = inject(DataService);
  dataZeldaArray = signal<ZeldaData[]>([]);

  private readonly toastService = inject(ToastService);

  constructor() {
    addIcons({heartHalfOutline, heart, heartOutline})
  }

  ngOnInit() {
    this.loadDataZelda();
  }

  private loadDataZelda() {
    this.dataService.getDataZelda(this.category()).subscribe(
      {
        next: res =>{
          this.dataZeldaArray.set(res.data);
        },
        error: err => {
          this.toastService.mostrarToast(err.message, 3000, 'danger', "middle");
        },
        complete: ()=>{
          this.toastService.mostrarToast('Data loaded!', 1500, 'success', 'bottom')
    }
      }
    )
  }

  protected readonly Array = Array;
  protected readonly Math = Math;
}
