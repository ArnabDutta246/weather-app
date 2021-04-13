import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-curr-loc-weather',
  templateUrl: './curr-loc-weather.component.html',
  styleUrls: ['./curr-loc-weather.component.scss'],
})
export class CurrLocWeatherComponent implements OnInit, OnChanges {
  @Input() cityWeather:any;

  public weatherDetails:any;
  public dayNightEvening = {
    morning:{icon:'sunny',color:'warning',greetings:'Morning'},
    afternoon:{icon:'ellipse',color:'warning',greetings:'Afternoon'},
    evening:{icon:'moon',color:'medium',greetings:'Evening'}
    }
  public dayState:any;
  constructor() { }

  ngOnInit() {
    this.weatherDetails = this.cityWeather;
    this.getGreetingTime();
  }
  ngOnChanges(){
    this.weatherDetails = this.cityWeather;
  }

   getGreetingTime () {
    var split_afternoon = 12 //24hr time to split the afternoon
    var split_evening = 17 //24hr time to split the evening
    var currentHour = parseFloat(moment().format("HH"));
    if(currentHour >= split_afternoon && currentHour <= split_evening) {
          this.dayState = this.dayNightEvening.afternoon;
    } else if(currentHour >= split_evening) {
          this.dayState = this.dayNightEvening.evening;
    } else {
          this.dayState = this.dayNightEvening.morning
    }
    return this.dayState;
  }
}
