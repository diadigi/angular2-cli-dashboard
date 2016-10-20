import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { routes } from './app.routes';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { GeneralModule } from './general/general.module';
import { NavsModule } from './navs/navs.module';
import { IconsModule } from './icons/icons.module';
import { GmapModule } from './gmap/gmap.module';
import { AlertsModule } from './alerts/alerts.module';
import { NotFoundModule } from './not-found/not-found.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    HomeModule,
    GeneralModule,
    NavsModule,
    IconsModule,
    GmapModule,
    AlertsModule,
    NotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
