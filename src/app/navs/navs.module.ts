import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsComponent } from './navs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {DataListService} from '../shared/data-list/data-list.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [NavsComponent],
  exports: [NavsComponent],
  providers: [DataListService]
})
export class NavsModule { }
