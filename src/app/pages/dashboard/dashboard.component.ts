import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';

import { LayoutService } from './../../shared/layout/layout.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: any = {};

  constructor(private layoutService: LayoutService) { }

  ngOnInit() {
    this.carregarGrafico();
    this.layoutService.menuMudou.subscribe(mudou => (mudou ? this.carregarGrafico() : null));
  }

  carregarGrafico() {
    this.chartOptions = {
      chart: {
        type: 'column'
      },
      title: {
        text: 'Proventos anuais'
      },
      subtitle: {
        text: null
      },
      xAxis: {
        type: 'category',
        labels: {
          rotation: -45,
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          text: 'Rendimentos (R$)'
        }
      },
      legend: {
        enabled: false
      },
      credits: {
        enabled: false
      },
      tooltip: {
        pointFormat: 'Rendimentos em <b>{series.name}</b>: <b>R$ {point.y:.2f}</b>'
      },
      plotOptions: {
        column: {
          stacking: 'value'
        }
      },
      series: [{
        name: 'Ações',
        data: [
          ['Janeiro', 223.63],
          ['Fevereiro', 538.44],
          ['Março', 615.81],
          ['Abril', 443.66],
          ['Maio', 301.47],
          ['Junho', 28.45],
          ['Julho', 93.22],
          ['Agosto', 729.3],
          ['Setembro', 109.81],
          ['Outubro', 243.1],
          ['Novembro', 0],
          ['Dezembro', 0],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          align: 'center',
          format: '{point.percentage:.1f}%', // one decimal
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }, {
        name: 'FIIs',
        data: [
          ['Janeiro', 336.09],
          ['Fevereiro', 313.53],
          ['Março', 320.44],
          ['Abril', 306.14],
          ['Maio', 276.33],
          ['Junho', 301.32],
          ['Julho', 313.01],
          ['Agosto', 332.21],
          ['Setembro', 348.99],
          ['Outubro', 0],
          ['Novembro', 0],
          ['Dezembro', 0],
        ],
        dataLabels: {
          enabled: true,
          rotation: -90,
          align: 'center',
          format: '{point.percentage:.1f}%', // one decimal
          style: {
            fontSize: '13px',
            fontFamily: 'Verdana, sans-serif'
          }
        }
      }]
    };

    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 300);
  }

}
