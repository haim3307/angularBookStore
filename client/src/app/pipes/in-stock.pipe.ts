import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inStock'
})
export class InStockPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value ? 'כן' : 'לא';
  }

}
