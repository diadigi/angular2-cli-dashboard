import { Component, OnInit } from '@angular/core';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [NgbDropdownConfig]
})
export class GeneralComponent implements OnInit {
  public isCollapsed = false;

  constructor(ddConfig: NgbDropdownConfig) {
    ddConfig.autoClose = true;
  }

  ngOnInit() {
  }

}
