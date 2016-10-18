import { Component, OnInit } from '@angular/core';

import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
  providers: [NgbAccordionConfig]
})
export class NavsComponent implements OnInit {

  constructor(config: NgbAccordionConfig) {
    config.closeOthers = false;
  }

  ngOnInit() {
  }

}
