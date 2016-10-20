/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HomeComponent } from './home.component';

beforeEach(() => {
  TestBed.configureTestingModule({
    declarations: [
      HomeComponent
    ],
  });
});

describe('Component: Home', () => {
  describe('Instantiation:', () => {
    it('should create an instance', () => {
      let component = new HomeComponent();
      expect(component).toBeTruthy();
    });
  });

  describe('Template:', () => {
    it('should say "Home" in a h1 tag', async(() => {
      let fixture = TestBed.createComponent(HomeComponent);
      fixture.detectChanges();
      let compiled = fixture.debugElement.nativeElement;
      expect(compiled.querySelector('h1').textContent).toContain('Home');
    }));
  });
});
