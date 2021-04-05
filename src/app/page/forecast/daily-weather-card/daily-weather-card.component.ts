import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-weather-card',
  templateUrl: './daily-weather-card.component.html',
  styleUrls: ['./daily-weather-card.component.scss'],
})
export class DailyWeatherCardComponent implements OnInit {
  @Input() weatherDetails:any;
  constructor() { }

  ngOnInit() {}

}
