import { LayoutService } from './../shared/layout/layout.service';
import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

declare var require: any;
const Boost = require('highcharts/modules/boost');
const noData = require('highcharts/modules/no-data-to-display');
const More = require('highcharts/highcharts-more');

Boost(Highcharts);
noData(Highcharts);
More(Highcharts);
noData(Highcharts);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public options: any = {
    chart: {
      type: 'column',
      height: 700
    },
    title: {
      text: 'Gastos por categoria'
    },
    credits: {
      enabled: false
    },
    tooltip: {
      formatter() {
        return this.series.name + ': ' + Highcharts.numberFormat(this.y, 2, ',', '.');
      }
    },
    xAxis: {
      categories: ['']
    },
    series: [{
      name: 'Lazer',
      data: [150]
    }, {
      name: 'Saúde',
      data: [1800]
    }]
  };

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.carregarGrafico();
    this.layoutService.menuMudou.subscribe(mudou => (mudou ? this.carregarGrafico() : null));
  }

  carregarGrafico() {
    setTimeout(() => Highcharts.chart('container', this.options), 200);
  }

}
