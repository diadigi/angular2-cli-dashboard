import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
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

  ngOnInit() { }

}
