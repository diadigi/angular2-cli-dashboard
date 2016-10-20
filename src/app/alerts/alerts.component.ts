import { Component, OnInit } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-alerts',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [ NgbAlertConfig ]
})
export class AlertsComponent implements OnInit {
  private selfClosingTimeout: any;

  public cardCollapsed: any[] = [];
  public selfClosingVisible: boolean = false;

  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'info';
    alertConfig.dismissible = true;
  }

  ngOnInit() { }

  public showSelfClosing(): void {
    this.selfClosingVisible = true;
    this.selfClosingTimeout = setTimeout(() => this.selfClosingVisible = false, 5000);
  }

  public closeSelfClosing(): void {
    this.selfClosingVisible = false;
    clearTimeout(this.selfClosingTimeout);
  }
}
