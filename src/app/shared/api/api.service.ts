import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private key:string =  "2275100c7ad5d81874309cc90e3e2e96"
  private apiAppName:string = "weather_app"

  private apiUrl:string = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid={API key}" 

  private exclude:object = {
    current:"current",
    hour:"hourly",
    daily:"daily",
    alert:"alert"
  }

  private myLocation = {
    lat:33.441792,
    long:-94.037689
  }

  private ifIncludeCurrentHourly = "daily,alert";
  private ifIncludeDaily = "current,hourly,alert";

  constructor(
    private http:HttpClient
    ) {
      //init call
      this.setUpUrl(this.myLocation.lat,this.myLocation.long,this.ifIncludeCurrentHourly);
    }

  // set the url
  setUpUrl(lat,lon,includeText):Observable<any>{
   let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=${includeText}&appid=${this.key}`;
   return this.fetchData(url);
  }

  //fetch the data with observables
  fetchData(setUpUrl):Observable<any>{
    return this.http.get(setUpUrl);
  }

}
