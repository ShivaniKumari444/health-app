import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout';
import { HomeComponent } from './features/home/home.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { ProfileComponent } from './features/profile/profile.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'profile', component: ProfileComponent }
    ]
  }
];
