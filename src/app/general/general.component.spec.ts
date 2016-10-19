/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GeneralComponent } from './general.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

describe('Component: General', () => {
  let ddConfig = new NgbDropdownConfig;
  let dpConfig = new NgbDatepickerConfig;

  it('should create an instance', () => {
    let component = new GeneralComponent(ddConfig, dpConfig);
    expect(component).toBeTruthy();
  });
});
