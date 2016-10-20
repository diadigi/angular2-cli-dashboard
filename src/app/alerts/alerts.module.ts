import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome'

import { AlertsComponent } from './alerts.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule
  ],
  declarations: [AlertsComponent]
})
export class AlertsModule { }
