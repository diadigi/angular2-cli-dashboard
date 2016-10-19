/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavsComponent } from './navs.component';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../shared/data-list/data-list.service';


describe('Component: Navs', () => {
  let accConfig = new NgbAccordionConfig;
  let tsConfig = new NgbTabsetConfig;
  let ds = new DataListService();

  it('should create an instance', () => {
    let component = new NavsComponent(accConfig, tsConfig, ds);
    expect(component).toBeTruthy();
  });
});
