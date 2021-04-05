import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DemoData } from 'src/app/shared/extra/demo-res-data';
import { LineChartComponent } from './line-chart/line-chart.component';
import { Chart, ChartDataSets,ChartType } from 'chart.js';

import {Label,Color} from 'ng2-charts';
@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.page.html',
  styleUrls: ['./forecast.page.scss'],
})
export class ForecastPage implements OnInit,AfterViewInit {
  @ViewChild('lineChart') lineChart:LineChartComponent;
  //@ViewChild('lineChart',{static:true}) lineChart:ElementRef;
  cityWeather = DemoData;
  bars:any;

   slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.4,
    slidesOffsetBefore:3,
    spaceBetween:3,
    freeMode:true
  };

  constructor() { }

  ngOnInit() {
  }
  ionViewDidEnter() {
    this.lineChart.createLineChart();
  //this.createBarChart();
  }
  // ionViewWillEnter(){
  //   this.lineChart.createBarChart()
  // }
  ngAfterViewInit() {
   // this.createBarChart();
  }
  // createBarChart() {
  //   this.bars = new Chart(this.lineChart.lineChart.nativeElement, {
  //     type: 'line',
  //     data: {
  //       labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'November', 'December'],
  //       datasets: [
  //         {
  //           label: 'Sell per week',
  //           fill: false,
  //           // lineTension: 0.1,
  //           backgroundColor: 'rgba(75,192,192,0.4)',
  //           borderColor: 'rgba(75,192,192,1)',
  //           borderCapStyle: 'butt',
  //           borderDash: [],
  //           borderDashOffset: 0.0,
  //           borderJoinStyle: 'miter',
  //           pointBorderColor: 'rgba(75,192,192,1)',
  //           pointBackgroundColor: '#fff',
  //           pointBorderWidth: 1,
  //           pointHoverRadius: 5,
  //           pointHoverBackgroundColor: 'rgba(75,192,192,1)',
  //           pointHoverBorderColor: 'rgba(220,220,220,1)',
  //           pointHoverBorderWidth: 2,
  //           pointRadius: 1,
  //           pointHitRadius: 10,
  //           data: [65, 59, 80, 81, 56, 55, 40, 10, 5, 50, 10, 15],
  //           spanGaps: false,
  //         }
  //       ]
  //     }
  //   });
  // }

}
