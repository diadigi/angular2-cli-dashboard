import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsComponent } from './icons.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  declarations: [IconsComponent],
  exports: [IconsComponent]
})
export class IconsModule { }
