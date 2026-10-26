import {Component, inject, OnInit, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonAvatar,
  IonContent,
  IonHeader, IonIcon,
  IonImg,
  IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel,
  IonList,
  IonListHeader, IonReorder, IonReorderGroup, IonText,
  IonTitle, IonToggle,
  IonToolbar
} from '@ionic/angular';
import {DataService} from "../../services/data-service";
import {Usuario} from "../../common/interfaces";
import {HeaderComponentComponent} from "../../components/header/header-component.component";
import {call, heart, shareSocial} from "ionicons/icons";
import {share} from "rxjs";
import {addIcons} from "ionicons";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonList, IonListHeader, IonItem, IonAvatar, IonImg, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonReorderGroup, IonToggle, IonText, IonReorder]
})
export class ListPage implements OnInit {


  @ViewChild('lista') lista!: IonList;

  private readonly dataService: DataService = inject(DataService);

  usuarios = signal<Usuario[]>([]);
  protected habilitado: boolean = true;

  constructor() {
    addIcons({shareSocial, heart, call})
  }

  ngOnInit() {
    this.loadUsers();
  }

  private loadUsers() {
    this.dataService.getUsers().subscribe(
      {
        next: data =>{
          this.usuarios.set(data);
        },
        error: error =>{
          console.log(error);
        },
        complete: () => {
          console.log('Users Loaded');
        }
      }
    )
  }

  protected favorite(user: Usuario) {
    console.log("Favorite clicked")
    this.lista.closeSlidingItems();
  }

  protected share(user: Usuario) {
    console.log("Share clicked")
    this.lista.closeSlidingItems();
  }
  protected call(user: Usuario) {
    console.log("Call clicked")
    this.lista.closeSlidingItems();
  }


  protected reordenar(event: any) {
    console.log(event);
    this.usuarios.update(items =>{
      const itemMover = items.splice(event.detail.from, 1) [0];
      items.splice(event.detail.to, 0,itemMover);
      return items;
    });
    console.log(this.usuarios());
    event.target.complete();
  }
}

