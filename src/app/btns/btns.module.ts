import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsComponent } from './btns.component';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

@NgModule({
  imports: [
    CommonModule,
    Angular2FontawesomeModule
  ],
  declarations: [BtnsComponent],
  exports: [BtnsComponent]
})
export class BtnsModule { }
