import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPrefix',
  pure: false
})
export class AddPrefixPipe implements PipeTransform {

  transform(value: string, prefix: string): string {
    if (!value) {
      return value;
    } else {
      return prefix + value;
    };
  }

}
