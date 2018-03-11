import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'BooksByCategoryPipe'
})
export class BooksByCategoryPipe implements PipeTransform {

  transform(value: any[], args: any[]): any {
      console.log(args);
      if(!args[0]) return value;
      if (args[0] !== 'rating') {
          return value.filter((book) => {
              return book.category === args[0];
          });
      }else {
          return value.filter((book) => {
              return book.rating > 4;
          });
      }
  }

}
