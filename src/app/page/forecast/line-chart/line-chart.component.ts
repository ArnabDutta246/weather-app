import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss'],
})
export class LineChartComponent implements OnInit {
  @Input() data:any;
  @ViewChild('lineChart',{static:true}) lineChart:ElementRef;

  bars: any;
  colorArray: any;
  
  constructor() { }

  ngOnInit() {}

  createLineChart() {
    this.bars = new Chart(this.lineChart.nativeElement, {
      type: 'bar',
      data: {
        labels: ['12', '13', '14', '15', '16'],
        datasets: [
          {
            // label: 'Sell per week',
            fill: false,
            // lineTension: 0.1,
            backgroundColor: 'rgba(255,213,52,1)',
            borderColor: 'rgba(255,213,52,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255,213,52,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255,213,52,1)',
            pointHoverBorderColor: 'rgba(255,213,52,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81,72],
            spanGaps: true,
          }
        ]
      },
       options: {
        legend: {
          display: false
        }
      }
        
    });
  }

}
