import { Component, OnInit } from '@angular/core';
import {MainData} from '../../services/main-data';
import {SortService} from '../../services/sort.service';
import {window} from 'rxjs/operator/window';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
    specials;
    authorData = {name: ''};
    title;
  constructor(public listsSer: MainData, public sort: SortService) {
      this.title = "home";
      if(this.listsSer.books.length === 0) listsSer.booksPreview();
      this.specials = [
          {id: 'newBooks', title: 'חדש בחנות' , orderBy: null},
          {id: 'popularBooks', title: 'הכי מדורגים' , orderBy: 'rating'}
      ];
  }

  fixNav() {
      alert('scroll!!!!!');
  }

  ngOnInit() {
  }
  toTop() {
/*
      window.scrollTo(0, 0);
*/
  }
}
