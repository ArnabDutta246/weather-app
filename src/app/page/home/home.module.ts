import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TemperaturePipe } from 'src/app/pipes/temperature/tempareture.pipe';
import { CurrLocWeatherComponent } from '../components/curr-loc-weather/curr-loc-weather.component';
import { LocationNameComponent } from '../components/location-name/location-name.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [
    HomePage,
   TemperaturePipe,
   CurrLocWeatherComponent,
   LocationNameComponent
  ],
  exports:[HomePage]
})
export class HomePageModule {}
