import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'htmlStripPipe'
})
export class HtmlStripPipePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return '';
    }

    return value.replace(/<\/?[^>]+(>|$)/g, "");
  }

}
