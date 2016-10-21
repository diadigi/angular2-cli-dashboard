import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './gmap.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYA9wxBb-cu4Q9sHW2F3qK52XrqTJXk3Y' // @todo Move from here
    }),
    Angular2FontawesomeModule,
    RouterModule
  ],
  declarations: [GmapComponent],
  exports: [GmapComponent]
})
export class GmapModule { }
