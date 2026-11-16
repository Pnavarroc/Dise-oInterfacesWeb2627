import type { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then((m) => m.InicioPage),
  },
  {
    path: 'slides',
    loadComponent: () => import('./pages/slides/slides.page').then((m) => m.SlidesPage),
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'action-sheet',
        pathMatch: 'full'
      },
      {
        path: 'action-sheet',
        loadComponent: () => import('./pages/action-sheet/action-sheet.page').then((m) => m.ActionSheetPage),
      },
      {
        path: 'alert',
        loadComponent: () => import('./pages/alert/alert.page').then((m) => m.AlertPage),
      },
    ],
  },
];
