import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { RouterModule } from '@angular/router';
import { NavsComponent } from './navs.component';

import {DataListService} from '../shared/data-list/data-list.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot(),
    Angular2FontawesomeModule,
    RouterModule
  ],
  declarations: [NavsComponent],
  exports: [NavsComponent],
  providers: [DataListService]
})
export class NavsModule { }
