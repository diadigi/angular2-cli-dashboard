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
  it('should create an instance', () => {
    let component = new HomeComponent();
    expect(component).toBeTruthy();
  });

  it('should say "home works" in a p tag', async(() => {
    let fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('home works!');
  }));
});
