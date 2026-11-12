import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonButton,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon, IonInfiniteScroll, IonInfiniteScrollContent,
  IonItem,
  IonItemOption,
  IonItemOptions,
  IonItemSliding,
  IonLabel,
  IonList,
  IonRow, IonText,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { construct, gift, information, informationOutline, paw, shield, skull } from 'ionicons/icons';
import { DataService } from '../../services/data-service';
import { ApiModel } from '../../common/models/Category.model';
import { ToastService } from '../../services/toast-service';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonAvatar,
    IonIcon,
    IonButton,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOptions,
    IonItemOption,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonText,
    RouterLink,
  ],
})
export class InicioPage implements OnInit {
  private readonly dataService: DataService = inject(DataService);
  private readonly toastService: ToastService = inject(ToastService);

  items = signal<ApiModel[]>([]);
  itemsShow = signal<ApiModel[]>([]);

  slides = [
    {
      icon: 'paw',
      color: 'success',
      text: 'creatures',
    },
    {
      icon: 'skull',
      color: 'dark',
      text: 'monsters',
    },
    {
      icon: 'construct',
      color: 'primary',
      text: 'materials',
    },
    {
      icon: 'shield',
      color: 'secondary',
      text: 'equipment',
    },
    {
      icon: 'gift',
      color: 'warning',
      text: 'treasure',
    },
  ];

  constructor() {
    addIcons({ paw, skull, gift, shield, construct, informationOutline });
  }

  ngOnInit() {}

  loadData(category: string) {
    this.dataService.getData(category).subscribe({
      next: (res) => {
        this.items.set(res.data);
        if (this.items().length <= 20) {
          this.itemsShow.set([...this.items()]);
        } else {
          this.itemsShow.set([...this.items().splice(0, 20)]);
        }
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  loadMore(event: InfiniteScrollCustomEvent) {
    if (this.items().length <= 10) {
      this.itemsShow.update((items) => [...items, ...this.items()]);
      event.target.complete();
      event.target.disabled = true;
    } else {
      this.itemsShow.update((items) => [...items, ...this.items().splice(0, 10)]);
      event.target.complete();
    }
  }

  protected showMessage(description: string) {
    this.toastService.showToast(description);
  }
}

export default InicioPage

