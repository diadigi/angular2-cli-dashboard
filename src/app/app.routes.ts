import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { NavsComponent } from './navs/navs.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ui',
    children: [
      { path: '' },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'navs',
        component: NavsComponent
      }
    ]
  }
];
