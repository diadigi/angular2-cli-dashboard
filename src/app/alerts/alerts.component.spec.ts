/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AlertsComponent } from './alerts.component';

import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

describe('Component: Alerts', () => {
  let aConfig = new NgbAlertConfig;
  let component = new AlertsComponent(aConfig);

  describe('Instatiation:', () => {
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set cardCollapsed', () => {
      expect(component.cardCollapsed).toBeTruthy();
    });

    it('should set selfClosingVisible', () => {
      expect(component.selfClosingVisible).toBeFalsy();
    });
  });

  describe('Method: showSelfClosing', () => {
    beforeAll(() => {
      component.showSelfClosing();
    });

    it('should update selfClosingVisible', () => {
        expect(component.selfClosingVisible).toBeTruthy();
    });
  });

  describe('Method: closeSelfClosing', () => {
    beforeAll(() => {
      component.closeSelfClosing();
    });

    it('should update selfClosingVisible', () => {
        expect(component.selfClosingVisible).toBeFalsy();
    });
  });
});
