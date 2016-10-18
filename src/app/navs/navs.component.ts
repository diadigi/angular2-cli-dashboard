import { Component, OnInit } from '@angular/core';

import {NgbAccordionConfig} from '@ng-bootstrap/ng-bootstrap';

import {DataListService} from '../shared/data-list/data-list.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
  providers: [NgbAccordionConfig]
})
export class NavsComponent implements OnInit {
  accordionPanels: any[] = [];
  errorMessage: string;

  constructor(config: NgbAccordionConfig, public dataListService: DataListService) {
    config.closeOthers = false;
  }

  ngOnInit() {
    this.dataListService.get('accordion')
      .subscribe(
        accordionPanels => this.accordionPanels = accordionPanels,
        error =>  this.errorMessage = <any>error
      );
  }

}
