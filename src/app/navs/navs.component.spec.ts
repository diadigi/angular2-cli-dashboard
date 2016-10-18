/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavsComponent } from './navs.component';
import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';


describe('Component: Navs', () => {
  let config = new NgbAccordionConfig;

  it('should create an instance', () => {
    let component = new NavsComponent(config);
    expect(component).toBeTruthy();
  });
});
