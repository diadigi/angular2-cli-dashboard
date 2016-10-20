/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { IconsComponent } from './icons.component';

describe('Component: Icons', () => {
  describe('Instantiation:', () => {
    let component = new IconsComponent();
    
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set cardCollapsed', () => {
      expect(component.cardCollapsed).toBeTruthy();
    });
  });
});
