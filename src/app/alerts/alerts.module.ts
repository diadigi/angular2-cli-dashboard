import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { RouterModule } from '@angular/router';

import { AlertsComponent } from './alerts.component';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    RouterModule
  ],
  declarations: [AlertsComponent]
})
export class AlertsModule { }
