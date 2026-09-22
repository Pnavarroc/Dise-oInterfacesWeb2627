import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'more',
    loadComponent: () => import('./pages/more/more.page').then( m => m.MorePage)
  },
  {
    path: 'extra',
    loadComponent: () => import('./pages/extra/extra.page').then( m => m.ExtraPage)
  },
];
