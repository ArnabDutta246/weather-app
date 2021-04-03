import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly-card',
  templateUrl: './hourly-card.component.html',
  styleUrls: ['./hourly-card.component.scss'],
})
export class HourlyCardComponent implements OnInit,OnChanges {
 @Input() hourly:any;

  public weatherDetails:any;
  constructor() { }

  ngOnInit() {
    this.weatherDetails = this.hourly;
    console.log(this.weatherDetails)
  }
  ngOnChanges(){
    this.weatherDetails = this.hourly;
        console.log(this.weatherDetails)
  }
}
