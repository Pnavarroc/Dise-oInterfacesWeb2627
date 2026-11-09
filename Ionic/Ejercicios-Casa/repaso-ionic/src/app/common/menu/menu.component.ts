import { Component, inject, input, OnInit, signal } from '@angular/core';
import { IonAvatar, IonCol, IonContent, IonHeader, IonItem, IonLabel, IonMenu,
  IonMenuToggle, IonRow, IonTitle, IonToolbar } from '@ionic/angular';
import { ToastService } from '../../services/toast-service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonMenu,
    IonContent,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonAvatar,
    IonCol,
    IonRow,
    IonLabel,
    IonItem,
    IonMenuToggle,
  ],
})
export class MenuComponent implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);
  totalMateriales = input.required<number>();
  constructor() {}

  ngOnInit() {}

  protected showTotal(materiales: number) {
    this.toastService.showToast('Total materiales: ' + materiales, 'middle', 2000, 'success');
  }
}
