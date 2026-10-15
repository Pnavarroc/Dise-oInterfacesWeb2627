import {Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonFabButton,
  IonHeader,
  IonIcon, IonImg, IonInfiniteScroll, IonInfiniteScrollContent, IonItem, IonItemOption, IonItemOptions, IonItemSliding,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponent} from "../../components/header/header.component";
import {addIcons} from "ionicons";
import {
  construct,
  gift,
  information,
  informationCircleOutline,
  informationOutline,
  paw,
  shield,
  skull
} from "ionicons/icons";
import {Category} from "../../interfaces/category";
import {ZeldaService} from "../../services/zelda-service";
import {GameItem, Response} from "../../interfaces/game-item";
import {ToastService} from "../../services/toast-service";



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponent, IonAvatar, IonLabel, IonIcon, IonFabButton, IonList, IonItemSliding, IonItem, IonImg, IonItemOption, IonItemOptions, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class InicioPage implements OnInit {

  private readonly toastService: ToastService = inject(ToastService);



  @ViewChild('lista') lista!: IonList;

  private readonly zeldaService: ZeldaService = inject(ZeldaService);
  items = signal<GameItem[]>([]);
  itemsAux: GameItem[] = [];

  constructor() {
    addIcons({paw, skull, construct, shield, gift, informationCircleOutline})
  }


  ngOnInit() {

  }

  loadItems(category: string)
  {
    this.zeldaService.getItems(category).subscribe({
      next: (response)=>{
        this.itemsAux = [...response.data];
        this.items.set(this.itemsAux.splice(0, 20));
      },
      error: (error)=>{
        console.log(error);
      }
      });
  }

  protected loadMore(event: any) {
    this.items.update(data => [
      ...data,
      ...this.itemsAux.splice(0, 10)
    ]);

    event.target.complete();
  }


  categorys: Category[] = [
    {
      name: "creatures",
      icon: "paw",
      color: "success"
    },
    {
      name: "monsters",
      icon: "skull",
      color: "dark"
    },
    {
      name: "materials",
      icon: "construct",
      color: "primary"
    },
    {
      name: "equipment",
      icon: "shield",
      color: "secondary"
    },
    {
      name: "treasure",
      icon: "gift",
      color: "warning"
    },

  ]

  protected info(event: PointerEvent, description: string) {
    this.toastService.mostrarToast(description, 2000, "secondary", "middle");
  }

}
