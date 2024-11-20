import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncatePipe'
})
export class TruncatePipePipe implements PipeTransform {

  transform(value: string, limit : number = 30 , suffix: string = "..."): string {
    if (!value) {
      return '';
    }

    if (value.length > limit) {
      return value.substring(0, limit) + suffix;

    } else {
      return value;
    }
  }

}
