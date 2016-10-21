/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Router } from '@angular/router';

import { LoginComponent } from './login.component';

let http: any;
let router: any;

describe('Component: Login', () => {
  describe('Instantiation', () => {
    let component = new LoginComponent(http, router);

    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it('should set headers', () => {
      expect(component.headers).toBeTruthy();
    });
  });
});
