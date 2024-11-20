import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize',

})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.split(' ').map(str => {
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }).join();
  }

}
