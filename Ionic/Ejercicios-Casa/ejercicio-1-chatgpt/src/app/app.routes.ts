import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'personaje',
    loadComponent: () => import('./pages/personaje/personaje.page').then( m => m.PersonajePage)
  },
  {
    path: 'entrenamiento',
    loadComponent: () => import('./pages/entrenamiento/entrenamiento.page').then( m => m.EntrenamientoPage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },

];

