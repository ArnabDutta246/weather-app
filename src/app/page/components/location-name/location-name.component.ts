import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-location-name',
  templateUrl: './location-name.component.html',
  styleUrls: ['./location-name.component.scss'],
})
export class LocationNameComponent implements OnInit {
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
