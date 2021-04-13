import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'regionCityDividar'
})
export class RegionCityDividarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
  const splits = value.split('/');
  return args[0] == 'City' ? splits[1] : splits[0]
  }

}
