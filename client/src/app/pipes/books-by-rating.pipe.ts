import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'booksByRating'
})
export class BooksByRatingPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
