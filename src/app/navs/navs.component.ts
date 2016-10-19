import { Component, OnInit } from '@angular/core';

import { NgbAccordionConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbTabsetConfig } from '@ng-bootstrap/ng-bootstrap';

import { DataListService } from '../shared/data-list/data-list.service';

@Component({
  selector: 'app-navs',
  templateUrl: './navs.component.html',
  styleUrls: ['./navs.component.css'],
  providers: [NgbAccordionConfig, NgbTabsetConfig]
})

export class NavsComponent implements OnInit {
  accordionPanels: any[] = [];
  tabset: any[] = [];
  errorMessage: string;

  constructor(accConfig: NgbAccordionConfig, tsConfig: NgbTabsetConfig, public dataListService: DataListService) {
    accConfig.closeOthers = false;
    tsConfig.type = "tabs";
  }

  ngOnInit() {
    this.getAccordionData();
    this.getTabsetData();
  }

  getAccordionData() {
    this.dataListService.get('accordion')
      .subscribe(
        accordionPanels => this.accordionPanels = accordionPanels,
        error =>  this.errorMessage = <any>error
      );
  }

  getTabsetData() {
    this.dataListService.get('tabset')
      .subscribe(
        tabset => this.tabset = tabset,
        error =>  this.errorMessage = <any>error
      );
  }

}
