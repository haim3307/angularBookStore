import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockOnly'
})
export class StockOnlyPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    console.log(value.filter((book) => book.inStock));
    console.log(args);
    return args ? value.filter((book) => book.inStock) : value;
  }

}
