import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bySearch'
})
export class BySearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
      return value.filter((book) => {
          return book.name.includes(args);
      });
  }

}
