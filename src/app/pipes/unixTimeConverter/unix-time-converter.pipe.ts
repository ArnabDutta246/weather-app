import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'unixTimeConverter'
})
export class UnixTimeConverterPipe implements PipeTransform {

  transform(unixTime: number, ...args: unknown[]): string {
    if(args.length == 0){
      let now = moment.unix(unixTime);
      let result = now.format("h A");
      return result;
    }else{
     return this.coverterFunc(unixTime,args[0]);
    }
  }

  coverterFunc(unixTime,arg):string{
     const milliseconds = unixTime * 1000 // 1575909015000

     const dateObject = new Date(milliseconds)

      const humanDateFormat = dateObject.toLocaleString() 
      //2019-12-9 10:30:15
      if(arg == 'days'){
        return dateObject.toLocaleString("en-US", {weekday: "long"})
        // Monday
      }else if(arg == 'date'){
       return dateObject.toLocaleString("en-US", {day: "numeric"}) +' '+ dateObject.toLocaleString("en-US", {month: "long"})
       // 9, December
      }
     

      // dateObject.toLocaleString("en-US", {year: "numeric"}) // 2019
      // dateObject.toLocaleString("en-US", {hour: "numeric"}) // 10 AM
  }

}
