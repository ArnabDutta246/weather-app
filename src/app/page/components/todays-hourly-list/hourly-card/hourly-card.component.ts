import { Component, Input, OnChanges, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-hourly-card',
  templateUrl: './hourly-card.component.html',
  styleUrls: ['./hourly-card.component.scss'],
})
export class HourlyCardComponent implements OnInit,OnChanges {
 @Input() hourly:any;

  public weatherDetails:any;
  public backgroudColor:string = 'warning'
  constructor() { }

ngOnInit() {
    this.weatherDetails = this.hourly;
    this.backgroudColor =  moment.unix(this.weatherDetails.dt).format("h A") == moment().format("h A")?'warning':'';
    console.log("ngInit",this.weatherDetails,this.backgroudColor);
  }
  ngOnChanges(){
    this.weatherDetails = this.hourly;
    this.backgroudColor =  moment.unix(this.weatherDetails.dt).format("h A") == moment().format("h A")?'warning':'';
    console.log("ngOnChanges",this.weatherDetails,this.backgroudColor);
  }
}
