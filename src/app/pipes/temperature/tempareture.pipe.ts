import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temperature'
})
export class TemperaturePipe implements PipeTransform {

  transform(kelvin: number, ...args: unknown[]): string {
    let conversionC = kelvin - 273;
    let conversionF = conversionC * 9 / 5 + 32;
    return conversionF.toFixed(1);
  }

}
