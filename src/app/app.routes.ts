import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NavsComponent } from './navs/navs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'navs',
    component: NavsComponent
  }
];
