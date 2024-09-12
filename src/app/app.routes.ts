import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full', // Redirect to the 'home' tab by default
  },
  {
    path: 'tabs',
    loadComponent: () =>
      import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full', // Redirect to 'home' within the tabs context
      },
      {
        path: 'home',
        loadComponent: () =>
          import('./pages/tabs/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'settings',
        loadComponent: () =>
          import('./pages/tabs/settings/settings.page').then(
            (m) => m.SettingsPage
          ),
      },
      {
        path: 'card',
        loadComponent: () =>
          import('./pages/tabs/card/card.page').then((m) => m.CardPage),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('./pages/tabs/transactions/transactions.page').then(
            (m) => m.TransactionsPage
          ),
      },
    ],
  },
];
