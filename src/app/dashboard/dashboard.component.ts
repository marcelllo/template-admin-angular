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
  grafico: any;
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
      formatter: function () {
        return this.series.name + ': ' + this.y.toFixed(2);
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
    }],

    responsive: {
      rules: [{
          condition: {
              maxWidth: 1980
          },
          chartOptions: {
              legend: {
                  align: 'center',
                  verticalAlign: 'bottom',
                  layout: 'horizontal'
              },
              yAxis: {
                  labels: {
                      align: 'left',
                      x: 0,
                      y: -5
                  },
                  title: {
                      text: null
                  }
              },
              subtitle: {
                  text: null
              },
              credits: {
                  enabled: false
              }
          }
      }]
  }
  };

  constructor() { }

  ngOnInit() {
    setTimeout(() => this.grafico = Highcharts.chart('container', this.options), 200);
    setTimeout(() => this.grafico.setSize(null), 200);
  }

}
