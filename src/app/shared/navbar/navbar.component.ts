import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

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
      if (event instanceof NavigationEnd) {
        this.currentPath = event.url;
        this.focusOnAnchor();
      }
    });
  };

  private focusOnAnchor(): void {
    const tree = this.router.parseUrl(this.router.url);
    if (tree.fragment) {
      // you can use DomAdapter
      const element = document.querySelector("#" + tree.fragment);
      if (element) { element.scrollIntoView(element); }
    }
  };

  ngOnInit() { }

}
