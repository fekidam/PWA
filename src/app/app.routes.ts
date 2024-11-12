import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./workout-starter/workout-starter.component').then(m => m.WorkoutStarterComponent)
  },
  {
    path: 'workout-details',
    loadComponent: () => import('./workout-details/workout-details.component').then(m => m.WorkoutDetailsComponent)
  },
  {
    path: '**',
    redirectTo: ''
  }
];
