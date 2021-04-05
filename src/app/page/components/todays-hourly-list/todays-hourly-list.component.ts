import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActionComponentService } from 'src/app/shared/componnents/components/action-component.service';

@Component({
  selector: 'app-todays-hourly-list',
  templateUrl: './todays-hourly-list.component.html',
  styleUrls: ['./todays-hourly-list.component.scss'],
})
export class TodaysHourlyListComponent implements OnInit,OnChanges {
  @Input() cityWeather:any;

  public weatherDetails:any;

  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView:2.4,
    slidesOffsetBefore:3,
    spaceBetween:3,
    freeMode:true
  };
  constructor(
    private actionsServices:ActionComponentService
  ) { }

  ngOnInit() {
    this.weatherDetails = this.cityWeather;
  }
  ngOnChanges(){
    this.weatherDetails = this.cityWeather;
  }

  navigatePages(){
    this.actionsServices.presentActionSheet();
  }
}
