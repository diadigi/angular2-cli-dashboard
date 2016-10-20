/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { Route } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

describe('App: Angular2CliDashboard', () => {
  describe('Instantiation:', () => {
    let config: Route[] = [
      { path: '', component: HomeComponent },
    ];

    let fixture: any;
    let app: any;
    let compiled: any;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [RouterTestingModule.withRoutes(config)],
        declarations: [
          AppComponent,
          HomeComponent
        ],
      });

      fixture = TestBed.createComponent(AppComponent);
      app = fixture.debugElement.componentInstance;
    });

    it('should create the app', async(() => {
      expect(app).toBeTruthy();
    }));

    it(`should have title set to 'Angular CLI Dashboard'`, async(() => {
      expect(app.title).toEqual('Angular CLI Dashboard');
    }));

    it(`should have currentPath set to ''`, async(() => {
      expect(app.currentPath).toEqual('');
    }));

    it('should render the title in the navbar', async(() => {
      fixture.detectChanges();
      compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('.navbar-brand').textContent).toContain('Angular CLI Dashboard');
    }));
  });
});
