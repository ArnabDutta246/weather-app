import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-curr-loc-weather',
  templateUrl: './curr-loc-weather.component.html',
  styleUrls: ['./curr-loc-weather.component.scss'],
})
export class CurrLocWeatherComponent implements OnInit, OnChanges {
  @Input() cityWeather:any;

  public weatherDetails:any;
  constructor() { }

  ngOnInit() {
    this.weatherDetails = this.cityWeather;
  }
  ngOnChanges(){
    this.weatherDetails = this.cityWeather;
  }
}
