import { Component, OnInit } from '@angular/core';

import { NgbDropdownConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbDatepickerConfig, NgbDateStruct, NgbProgressbarConfig } from '@ng-bootstrap/ng-bootstrap';

const now = new Date();

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [NgbDropdownConfig]
})

export class GeneralComponent implements OnInit {
  public cardCollapsed: any[] = [];
  public isCollapsed: boolean = false;
  public dpModel: NgbDateStruct;
  public dpDisabled: boolean = false;

  constructor(ddConfig: NgbDropdownConfig, dpConfig: NgbDatepickerConfig, pbConfig: NgbProgressbarConfig) {
    // dropdown config
    ddConfig.autoClose = true;

    // datepicker config
    // datepicker limits
    dpConfig.minDate = {year: 1900, month: 1, day: 1};
    dpConfig.maxDate = {year: 2099, month: 12, day: 31};
    // disable weekends
    dpConfig.markDisabled = (date: NgbDateStruct) => {
      const d = new Date(date.year, date.month - 1, date.day);
      return d.getDay() === 0 || d.getDay() === 6;
    };

    // progressbar config
    pbConfig.max = 1000;
    pbConfig.animated = true;
    pbConfig.type = 'success';
  }

  ngOnInit() {
  }

  public selectToday(): void {
    this.dpModel = {
      year: now.getFullYear(),
      month: now.getMonth() + 1,
      day: now.getDate()
    };
  }
}
