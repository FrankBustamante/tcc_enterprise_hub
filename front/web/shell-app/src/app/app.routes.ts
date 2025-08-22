import { Routes } from '@angular/router';


export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  {
    path: 'auth',
    loadChildren: () => import('auth-mf/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'projects',
    loadChildren: () => import('project-mf/Module').then(m => m.RemoteEntryModule)
  },
  {
    path: 'analytics',
    loadChildren: () => import('analytics-mf/Module').then(m => m.RemoteEntryModule)
  },
  { path: '**', redirectTo: 'dashboard' }
];
