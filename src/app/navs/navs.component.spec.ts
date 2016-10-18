/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavsComponent } from './navs.component';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';
import {NgbTabsetConfig} from '@ng-bootstrap/ng-bootstrap';


describe('Component: Navs', () => {
  let accConfig = new NgbAccordionConfig;
  let tsConfig = new NgbTabsetConfig;

  it('should create an instance', () => {
    let component = new NavsComponent(accConfig, tsConfig);
    expect(component).toBeTruthy();
  });
});
