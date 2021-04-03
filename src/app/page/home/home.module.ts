import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TemperaturePipe } from 'src/app/pipes/temperature/tempareture.pipe';
import { CurrLocWeatherComponent } from '../components/curr-loc-weather/curr-loc-weather.component';
import { TodaysHourlyListComponent } from '../components/todays-hourly-list/todays-hourly-list.component';
import { HourlyCardComponent } from '../components/todays-hourly-list/hourly-card/hourly-card.component';
import { UnixTimeConverterPipe } from 'src/app/pipes/unixTimeConverter/unix-time-converter.pipe';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [
    HomePage,
    TemperaturePipe,
    UnixTimeConverterPipe,
    CurrLocWeatherComponent,
    TodaysHourlyListComponent,
    HourlyCardComponent
  ],
  exports:[HomePage]
})
export class HomePageModule {}
