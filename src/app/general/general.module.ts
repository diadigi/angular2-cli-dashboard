import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { GeneralComponent } from './general.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    RouterModule
  ],
  declarations: [GeneralComponent],
  exports: [GeneralComponent]
})
export class GeneralModule { }
