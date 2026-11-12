import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  InfiniteScrollCustomEvent,
  IonAvatar,
  IonButton,
  IonContent,
  IonHeader,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonTitle,
  IonToolbar,
} from '@ionic/angular';
import { ProductService } from '../../services/product-service';
import { Product } from '../../common/models/Product.model';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-productos-infinite',
  templateUrl: './productos-infinite.page.html',
  styleUrls: ['./productos-infinite.page.scss'],
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonList,
    IonItem,
    IonAvatar,
    IonLabel,
    IonButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    RouterLink,
  ],
})
export class ProductosInfinitePage implements OnInit {
  private readonly productService: ProductService = inject(ProductService);
  products = signal<Product[]>([]);
  productsShow = signal<Product[]>([]);

  constructor() {}

  ngOnInit() {
    this.loadProducts();
  }

  private loadProducts() {
    this.productService.getProds().subscribe({
      next: (res) => {
        //Añadimos a la lista que vamos a mostrar los primeros 15 elementos
        this.productsShow.set(res.products.slice(0, 15));
        //Y en nuestra segunda lista metemos los elementos restantes primera lista(0-14) segunta lista(15-fin)
        this.products.set(res.products.slice(15));
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  protected async loadMore(event: InfiniteScrollCustomEvent) {
    //Este array guarda los siguientes 5 productos a mostrar
    const siguientes = this.products().slice(0, 5);

    // Actualizamos nuestra lista con 5 elementos mas los actuales
    this.productsShow.update((actuales) => [...actuales, ...siguientes]);

    //Actualizamos nuestra lista de pendientes para quitar los 5 elementos añadidos antes
    this.products.update((pendientes) => pendientes.slice(5));

    await event.target.complete();
  }
}
