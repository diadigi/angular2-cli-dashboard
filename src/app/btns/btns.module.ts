import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnsComponent } from './btns.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BtnsComponent],
  exports: [BtnsComponent]
})
export class BtnsModule { }
