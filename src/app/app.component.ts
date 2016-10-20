import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Angular CLI Dashboard';
  public currentPath: string = '';

  constructor(private router: Router) {
    this.subscribeToRouteChanges();
  }

  private subscribeToRouteChanges(): void {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationStart') {
        this.currentPath = event.url;
      }
    });
  }
}
