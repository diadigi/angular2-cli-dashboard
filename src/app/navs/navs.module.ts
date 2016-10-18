import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavsComponent } from './navs.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    NgbModule.forRoot()
  ],
  declarations: [NavsComponent],
  exports: [NavsComponent]
})
export class NavsModule { }
