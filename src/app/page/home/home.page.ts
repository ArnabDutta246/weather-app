import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { NativeGeocoder, NativeGeocoderResult, NativeGeocoderOptions } from '@ionic-native/native-geocoder/ngx';
import { DemoData } from 'src/app/shared/extra/demo-res-data';
const { Geolocation } = Plugins;
export interface Address {
countryCode:string,
countryName:string,
locality:string
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  coords: any;
  address:Address;
  demoData = DemoData;
  constructor(private nativeGeocoder: NativeGeocoder) { 
     //this.locate();
  }











  //======================= ============================
  async locate() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.coords = coordinates.coords; 

    console.log(this.coords);
    console.log("helloow")
  }


  async getLocation(latitude,longitude){
    let options: NativeGeocoderOptions = {
    useLocale: true,
    maxResults: 5
    };
    this.nativeGeocoder.reverseGeocode(latitude, longitude, options)
      .then((result: NativeGeocoderResult[]) => {
        console.log(JSON.stringify(result[0]));
        this.address = result[0];
      })
      .catch((error: any) => console.log(error));
      }
}