/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AlertsComponent } from './alerts.component';

describe('Component: Alerts', () => {
  describe('Instatiation:', () => {
    let component = new AlertsComponent();
    
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set cardCollapsed', () => {
      expect(component.cardCollapsed).toBeTruthy();
    });
  });
});
