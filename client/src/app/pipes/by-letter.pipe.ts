import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'byLetter'
})
export class ByLetterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return args ? value.filter((book) => book.name.startsWith(args)) : value;
  }

}
