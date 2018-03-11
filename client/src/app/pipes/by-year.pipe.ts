import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byYear'
})
export class ByYearPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((book) => book.yearOfPublish == args) : value;
  }

}
