import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GmapComponent } from './gmap.component';
import { BrowserModule } from '@angular/platform-browser';

import { AgmCoreModule } from 'angular2-google-maps/core';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDYA9wxBb-cu4Q9sHW2F3qK52XrqTJXk3Y' // @todo Move from here
    })
  ],
  declarations: [GmapComponent],
  exports: [GmapComponent]
})
export class GmapModule { }
