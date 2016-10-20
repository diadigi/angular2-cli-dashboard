/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GmapComponent } from './gmap.component';

describe('Component: Gmap', () => {
  let component: any;
  let data = {
    lat: 51.5074,
    lng: -0.118092,
    zoom: 10
  };

  beforeAll(() => {
    component = new GmapComponent();
  });

  describe('Instatiation:', () => {
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set lat', () => {
      expect(component.lat).toBe(data.lat);
    });

    it('should set lng', () => {
      expect(component.lng).toBe(data.lng);
    });

    it('should set zoom', () => {
      expect(component.zoom).toBe(data.zoom);
    });

    it('should set markers', () => {
      expect(component.markers).toBeTruthy;
    });
  });

  describe('Method: clickedMarker', () => {
    beforeAll(() => {
      console.log = jasmine.createSpy('log');
    });

    describe('when marker has a label', () => {
      beforeAll(() => {
        component.clickedMarker('hello', 1);
      });

      it('should log the right message', () => {
        expect(console.log).toHaveBeenCalledWith(`clicked the marker: hello`);
      });
    });

    describe('when marker has no label', () => {
      beforeAll(() => {
        component.clickedMarker(undefined, 1);
      });

      it('should log the right message', () => {
        expect(console.log).toHaveBeenCalledWith(`clicked the marker: 1`);
      });
    });
  });

  describe('Method: mapClicked', () => {
    let mockEvent = {
      coords: {
        lat: 1,
        lng: 2
      }
    };

    beforeAll(() => {
      component.mapClicked(mockEvent);
    });

    it('should update markers', () => {
      let len = component.markers.length;
      expect(len).not.toBe(0);
      expect(component.markers[len - 1].lat).toBe(mockEvent.coords.lat);
      expect(component.markers[len - 1].lng).toBe(mockEvent.coords.lng);
    });
  });

  describe('Method: markerDragEnd', () => {
    beforeAll(() => {
      console.log = jasmine.createSpy('log');
      component.markerDragEnd(1, 'event');
    });

    it('should log the right message', () => {
      expect(console.log).toHaveBeenCalledWith('dragEnd', 1, 'event');
    });
  });
});
