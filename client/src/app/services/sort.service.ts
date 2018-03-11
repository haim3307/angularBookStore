import { Injectable } from '@angular/core';
import {MainData} from './main-data';

@Injectable()
export class SortService {
  allInputs = false;
  orderItems = '';
  displayShop = '';
  search = {name: ''};
  gridWeb = 3;
  yearIs = null;
  letterSearch = null;
  InStockOnly = false;
  constructor(public mainData: MainData) {
      this.orderItems = '+name';
  }
  filterCategories() {
      const format = Array.from(this.mainData.categories);
      const selectedCat = format.filter((key) => {
          return this.mainData.cate[key.toLocaleString()];
      });
      const bookByCate = this.mainData.bookCache.filter((book) => {
          return selectedCat.indexOf(book.category) !== -1;
      });
      this.mainData.books = (bookByCate.length > 0) ? bookByCate : this.mainData.bookCache;
  }
  sortYear (year) {
       return  this.yearIs  = this.yearIs === year ? null : year;
  }
}
