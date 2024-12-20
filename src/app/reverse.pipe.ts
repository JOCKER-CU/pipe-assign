import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  pure: true
})
export class ReversePipe implements PipeTransform {

  transform(value: string, ...args: string[]): string {
    return value.split('').reverse().join('');
  }

}
