import { Component, OnInit, ViewChild, OnDestroy, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { DxDataGridComponent } from 'devextreme-angular';
import { Observable } from "rxjs/Observable";
import { Subject } from "rxjs/Subject";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AboutComponent implements OnInit, OnDestroy, AfterViewInit {

  orders: any[] = [];
  orderColumns: string[] = ['orderId', 'name', 'amount'];
  @ViewChild(DxDataGridComponent) grid: DxDataGridComponent;
  delegate: () => any;
  delegateConfig: any = {};
  sub: Subject<any> = new Subject<any>();

  constructor() { }

  ngOnInit() {
    this.orders = [{
      orderId: 1,
      name: 'jupige0',
      amount: 10,
    },
    {
      orderId: 2,
      name: 'jupige2',
      amount: 20,
    },
    {
      orderId: 3,
      name: 'jupige3',
      amount: 30,
    }];
    let self = this;
    setTimeout(() => {
      self.delegate = () => self.grid;
      self.delegateConfig.delegate = self.delegate;
      self.sub.subscribe(() => {
        console.log(self.grid);
        console.log(self);
      });
    }, 2);
  }

  public ngOnDestroy(): void {
    this.grid = null;
  }

  public ngAfterViewInit(): void {
    document.querySelector('html').className = 'html';
  }

}
