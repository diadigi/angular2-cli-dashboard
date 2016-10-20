/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { HomeComponent } from '../../home/home.component';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

describe('Component: Navbar', () => {
  describe('Instantiation', () => {
    let config: Route[] = [
      { path: '', component: HomeComponent },
    ];

    let fixture: any;
    let component: any;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config)],
        declarations: [
          HomeComponent,
          NavbarComponent
        ],
      });

      fixture = TestBed.createComponent(NavbarComponent);
      component = fixture.debugElement.componentInstance;
    });

    it('should create an instance', () => {
      expect(component).toBeTruthy();
    });

    it(`should have title set to 'Angular CLI Dashboard'`, async(() => {
      expect(component.title).toEqual('Angular CLI Dashboard');
    }));

    it(`should have currentPath set to ''`, async(() => {
      expect(component.currentPath).toEqual('');
    }));

    it('should render the title in the navbar', async(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.navbar-brand').textContent).toContain('Angular CLI Dashboard');
    }));
  });
});
