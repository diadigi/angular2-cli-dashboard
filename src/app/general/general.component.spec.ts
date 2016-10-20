/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GeneralComponent } from './general.component';
import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig, NgbDateStruct, NgbProgressbarConfig, NgbRatingConfig, NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

describe('Component: General', () => {
  let ddConfig = new NgbDropdownConfig;
  let dpConfig = new NgbDatepickerConfig;
  let pbConfig = new NgbProgressbarConfig;
  let rConfig = new NgbRatingConfig;
  let tConfig = new NgbTooltipConfig;
  let component: any;

  let minDate: any = {year: 1900, month: 1, day: 1};
  let maxDate: any = {year: 2099, month: 12, day: 31};

  beforeAll(() => {
    component = new GeneralComponent(ddConfig, dpConfig, pbConfig, rConfig, tConfig);
  });

  describe('Instatiation:', () => {
    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set isCollapsed', () => {
      expect(component.isCollapsed).toBeFalsy();
    });

    it('should not define dpModel', () => {
      expect(component.dpModel).toBeUndefined();
    });

    it('should set dpDisabled', () => {
      expect(component.isCollapsed).toBeFalsy();
    });

    it('should set cardCollapsed', () => {
      expect(component.cardCollapsed).toBeTruthy();
    });

    it('should set tooltipData', () => {
      expect(component.tooltipData).toBeTruthy();
    });

    it('should configure NgbDrowpdown', () => {
      expect(ddConfig.autoClose).toBeTruthy();
    });

    describe('should configure NgbDatepicker', () => {
      it('should set minDate', () => {
          expect(dpConfig.minDate).toEqual(minDate);
      });
      it('should set maxDate', () => {
          expect(dpConfig.maxDate).toEqual(maxDate);
      });
      it('should define markDisabled', () => {
        expect(dpConfig.markDisabled).toBeTruthy();
      });
    });

    describe('should configure NgbRating', () => {
      it('should set max', () => {
          expect(rConfig.max).toBeTruthy();
      });
      it('should set readonly', () => {
        expect(rConfig.readonly).toBeFalsy();
      });
    });

    describe('should configure NgbProgressbar', () => {
      it('should set max', () => {
          expect(pbConfig.max).toBeTruthy();
      });
      it('should set animated', () => {
          expect(pbConfig.animated).toBeTruthy();
      });
      it('should set type', () => {
          expect(pbConfig.type).toBeTruthy();
      });
    });

    describe('should configure NgbTooltip', () => {
      it('should set placement', () => {
          expect(tConfig.placement).toBeTruthy();
      });
      it('should set triggers', () => {
          expect(tConfig.triggers).toBeTruthy();
      });
    });
  });

  describe('Method: selectToday', () => {
    describe('should update dpModel', () => {
      beforeAll(() => {
        component.selectToday();
      });

      it('should set year', () => {
          expect(component.dpModel.year).toBeTruthy();
      });
      it('should set month', () => {
          expect(component.dpModel.month).toBeTruthy();
      });
      it('should set day', () => {
          expect(component.dpModel.day).toBeTruthy();
      });
    });
  });
});
