import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'unixTimeConverter'
})
export class UnixTimeConverterPipe implements PipeTransform {

  transform(unixTime: number, ...args: unknown[]): string {
    let now = moment.unix(unixTime);
    let result = now.format("h A");
    return result;
  }

}
