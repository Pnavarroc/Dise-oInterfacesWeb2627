import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.default),
  },
  {
    path: 'productos-infinite',
    loadComponent: () =>
      import('./pages/productos-infinite/productos-infinite.page').then((m) => m.ProductosInfinitePage),
  },
  {
    path: 'publicaciones',
    loadComponent: () => import('./pages/publicaciones/publicaciones.page').then((m) => m.PublicacionesPage),
  },
];
