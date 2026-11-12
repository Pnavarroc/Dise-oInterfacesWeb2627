import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonAvatar, IonContent, IonFooter, IonItem, IonLabel, IonList, IonToolbar } from '@ionic/angular';
import { HeaderComponentComponent } from '../../common/components/header-component/header-component.component';
import { MaterialService } from '../../services/material-service';
import { ApiResponse, Material } from '../../common/models/Materials';
import { ToastService } from '../../services/toast-service';


@Component({
  selector: 'app-materiales',
  templateUrl: './materiales.page.html',
  styleUrls: ['./materiales.page.scss'],
  imports: [
    IonContent,
    CommonModule,
    FormsModule,
    HeaderComponentComponent,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonFooter,
    IonToolbar,
  ],
})
export class MaterialesPage implements OnInit {
  private readonly toastService: ToastService = inject(ToastService);

  private readonly materialService: MaterialService = inject(MaterialService);

  materials = signal<Material[]>([]);

  constructor() {}

  ngOnInit() {
    this.loadMaterials();
  }

  private loadMaterials() {
    // @ts-ignore
    this.materialService.getMaterials().subscribe({
      next: (response: ApiResponse) => {
        this.materials.set(response.data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Materials loaded');
      },
    });
  }

  protected showName(name: string) {
    this.toastService.showToast('Has pulsado: ' + name ,'bottom', 'success', 1500);
  }
}
