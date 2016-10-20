/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavsComponent } from './navs.component';
import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';
import { DataListService } from '../shared/data-list/data-list.service';


describe('Component: Navs', () => {
  let accConfig = new NgbAccordionConfig;
  let tsConfig = new NgbTabsetConfig;
  let http: any;
  let ds = new DataListService(http);
  let component: any;

  describe('Instantiation', () => {
    beforeAll(() => {
      component = new NavsComponent(accConfig, tsConfig, ds);
    });

    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set accordionPanels', () => {
      expect(component.accordionPanels).toBeTruthy();
    });

    it('should set tabset', () => {
      expect(component.tabset).toBeTruthy();
    });
  });
});
