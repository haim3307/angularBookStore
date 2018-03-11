import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log('hi');
    console.log(args);
      if(args === '+bookPrice') value.sort((a, b) => a.bookPrice - b.bookPrice);
      if(args === '-bookPrice') value.sort((a, b) => b.bookPrice - a.bookPrice);
      if(args === '+name') value.sort((a, b) => {
          if(a.name < b.name) return -1;
          if(a.name > b.name) return 1;
          return 0;
      });
      if(args === '+author') value.sort((a, b) => {
          if(a.author < b.author) return -1;
          if(a.author > b.author) return 1;
          return 0;
      });
      console.log(value);
      return value;
  }


}
