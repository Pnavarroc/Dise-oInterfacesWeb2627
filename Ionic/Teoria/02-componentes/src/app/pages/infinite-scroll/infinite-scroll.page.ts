import {Component, OnInit, signal} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonTitle,
  IonToolbar
} from '@ionic/angular';
import {HeaderComponentComponent} from "../../components/header/header-component.component";

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, HeaderComponentComponent, IonList, IonItem, IonInfiniteScroll, IonInfiniteScrollContent]
})
export class InfiniteScrollPage implements OnInit {
  miArrayAux = Array(100);
  miArray = signal<any[]>([]);



  constructor() { }

  ngOnInit() {
    this.miArray.update(data => [...data, ...this.miArrayAux.splice(0,10)]);
  }

  protected loadMore(event: any)
  {
    if(this.miArrayAux.length <= 10)
    {
      this.miArray.update(data => [...data, ...this.miArrayAux]);
      event.target.disabled = true;
    }
    else
    {
      this.miArray.update(data => [...data, ...this.miArrayAux.splice(0,10)]);
    }
    event.target.complete();
  }
}
