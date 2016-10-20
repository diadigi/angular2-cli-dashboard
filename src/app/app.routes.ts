import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GeneralComponent } from './general/general.component';
import { NavsComponent } from './navs/navs.component';
import { IconsComponent } from './icons/icons.component';
import { GmapComponent } from './gmap/gmap.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'ui',
    children: [
      {
        path: '',
        redirectTo: 'general',
        pathMatch: 'full'
      },
      {
        path: 'general',
        component: GeneralComponent
      },
      {
        path: 'navigation-accordions',
        component: NavsComponent
      },
      {
        path: 'icons',
        component: IconsComponent
      }
    ]
  },
  {
    path: 'google-maps',
    component: GmapComponent
  },
  {
    path: '404',
    component: NotFoundComponent
  },
  {
    path: '**',
    redirectTo: '404'
  }
];
