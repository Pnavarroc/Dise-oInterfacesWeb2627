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
    path: 'cars',
    loadComponent: () => import('./pages/cars/cars.page').then( m => m.CarsPage)
  },
  {
    path: 'airplanes',
    loadComponent: () => import('./pages/airplanes/airplanes.page').then( m => m.AirplanesPage)
  },
  {
    path: 'boats',
    loadComponent: () => import('./pages/boats/boats.page').then( m => m.BoatsPage)
  },
];
