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
    path: 'alert',
    loadComponent: () => import('./pages/alert/alert.page').then( m => m.AlertPage)
  },
  {
    path: 'avatar',
    loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
  },
  {
    path: 'action-sheet',
    loadComponent: () => import('./pages/action-sheet/action-sheet.page').then( m => m.ActionSheetPage)
  },
  {
    path: 'grid-buttons',
    loadComponent: () => import('./pages/grid-buttons/grid-buttons.page').then( m => m.GridButtonsPage)
  },
  {
    path: 'card',
    loadComponent: () => import('./pages/card/card.page').then( m => m.CardPage)
  },
  {
    path: 'fab',
    loadComponent: () => import('./pages/fab/fab.page').then( m => m.FabPage)
  },
  {
    path: 'slides',
    loadComponent: () => import('./pages/slides/slides.page').then( m => m.SlidesPage)
  },
  {
    path: 'slides2',
    loadComponent: () => import('./pages/slides2/slides2.page').then( m => m.Slides2Page)
  },
  {
    path: 'list',
    loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
  },
  {
    path: 'infinite-scroll',
    loadComponent: () => import('./pages/infinite-scroll/infinite-scroll.page').then( m => m.InfiniteScrollPage)
  },
  {
    path: 'infinite2',
    loadComponent: () => import('./pages/infinite2/infinite2.page').then( m => m.Infinite2Page)
  },
  {
    path: 'modal',
    loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
  },
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
      },
      {
        path: 'account',
        loadComponent: () => import('./pages/avatar/avatar.page').then( m => m.AvatarPage)
      },
      {
        path: 'contact',
        loadComponent: () => import('./pages/list/list.page').then( m => m.ListPage)
      },
      {
        path: 'settings',
        loadComponent: () => import('./pages/modal/modal.page').then( m => m.ModalPage)
      }
    ]
  },
  {
    path: 'tabs2',
    loadComponent: () => import('./pages/tabs2/tabs2.page').then( m => m.Tabs2Page),
    children: [
      {
        path: 'tab-creatures',
        loadComponent: () => import('./pages/tabs-creatures/tabs-creatures.page').then( m => m.TabsCreaturesPage)
      },
      {
        path: 'tab-equipment',
        loadComponent: () => import('./pages/tabs-equipment/tabs-equipment.page').then( m => m.TabsEquipmentPage)
      },
      {
        path: 'tab-materials',
        loadComponent: () => import('./pages/tabs-materials/tabs-materials.page').then( m => m.TabsMaterialsPage)
      },

    ]
  },

];
