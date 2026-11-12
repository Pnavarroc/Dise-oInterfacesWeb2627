import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'personajes',
    pathMatch: 'full',
  },
  {
    path: 'personajes',
    loadComponent: () => import('./pages/personajes/personajes.page').then((m) => m.PersonajesPage),
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then((m) => m.PerfilPage),
  },
];
