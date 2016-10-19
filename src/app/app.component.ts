import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular CLI Dashboard';
  currentPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event.constructor.name === 'NavigationStart') {
        this.currentPath = event.url;
        console.log(this.currentPath);
      }
    });
  }

}
