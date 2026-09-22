import {Component, inject, OnInit, signal, WritableSignal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {DataService} from "../../services/data-service";
import {Componente} from "../../common/interfaces";
import {
  IonContent,
  IonHeader, IonIcon, IonItem, IonLabel,
  IonList,
  IonMenu,
  IonMenuToggle,
  IonRouterLink,
  IonTitle,
  IonToolbar
} from "@ionic/angular";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  imports: [
    IonHeader,
    IonContent,
    IonMenu,
    IonToolbar,
    IonTitle,
    IonList,
    IonMenuToggle,
    IonRouterLink,
    IonItem,
    IonIcon,
    IonLabel,
    RouterLink
  ],
})
export class MenuComponent  implements OnInit {
  dataService: DataService = inject(DataService);
  componentes: WritableSignal<Componente[]> = signal<Componente[]>([]);
  constructor() { }

  ngOnInit() {
    this.cargarComponentes();
  }

  private cargarComponentes() {
    this.dataService.getComponentes().subscribe(
      {
        next:(data)=> {
          this.componentes.set(data);
        },
        error:(err) =>{
          console.error(err);
        },
        complete:() => {
          console.log("Componentes cargados");
          console.log(this.componentes());
        }
      }
    )
  }

}
