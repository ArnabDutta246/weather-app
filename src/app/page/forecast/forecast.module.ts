import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForecastPageRoutingModule } from './forecast-routing.module';

import { ForecastPage } from './forecast.page';
import { LineChartComponent } from './line-chart/line-chart.component';

import {ChartsModule} from 'ng2-charts'
import { DailyWeatherCardComponent } from './daily-weather-card/daily-weather-card.component';
import { TemperaturePipe } from 'src/app/pipes/temperature/tempareture.pipe';
import { UnixTimeConverterPipe } from 'src/app/pipes/unixTimeConverter/unix-time-converter.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForecastPageRoutingModule,
    ChartsModule,
  ],
  declarations: [
    ForecastPage,
    LineChartComponent,
    DailyWeatherCardComponent,
    TemperaturePipe,
    UnixTimeConverterPipe,
  ]
})
export class ForecastPageModule {}
