import {Component, OnInit} from '@angular/core';
import {MainData} from '../../services/main-data';
import {SortService} from '../../services/sort.service';
import {ActivatedRoute, Router} from "@angular/router";
import {JsonReqsService} from "../../services/json-reqs.service";

@Component({
  selector: 'app-store-page',
  templateUrl: './store-page.component.html',
  styleUrls: ['./store-page.component.css']
})
export class StorePageComponent implements OnInit {
  window = window;
  heLetters = 'אבגדהוזחטיכלמנסעפצקרשת'.split('');
  initials = {store: {}};
  bookCache;
  books;
  pages: number = 0;

  constructor(public listsSer: MainData, public sort: SortService, private route: ActivatedRoute, private myHttp: JsonReqsService, private router: Router) {
    this.myHttp.getInitials('store').subscribe((res) => {
      this.initials.store = res;
      console.log('store initials:', this.initials);
    });
    this.route.queryParams.subscribe((params) => {
      console.log('params:', params);
      console.log('this', this);
      this.listsSer.booksByPage(params['page'] ? params['page'] : 1, this).then((data) => {
        this.pages = Math.ceil(data['total_len'] / 5);
        console.log('changed page prop:', this.pages);
        this.bookCache = data['items'];
        this.books = data['items'];
        console.log('pages:', Math.ceil(data['total_len'] / 5));
      });
    });

    this.window.addEventListener('resize', () => {
      this.changeGrid();
    });
    this.changeGrid();
    console.log(this.heLetters);

  }

  changePage(e) {
    this.listsSer.booksByPage({pagenum: e}, this).then((res) => {
      this.bookCache = res['items'];
      this.books = res['items'];
    });
  }

  changeGrid() {
    if (this.window.innerWidth > 1600) this.sort.gridWeb = 4;
    if (this.window.innerWidth > 1350 && this.window.innerWidth < 1600) this.sort.gridWeb = 3;
    if (this.window.innerWidth < 1350 && this.window.innerWidth > 1050) this.sort.gridWeb = 2;
    if (this.window.innerWidth < 1050) this.sort.gridWeb = 1;
  }

  searchByLetter(letter) {
    if (letter === this.sort.letterSearch) return this.sort.letterSearch = null;
    this.sort.letterSearch = letter;
  }

  ngOnInit() {
  }

  getFiltered(qP) {
    //##
    console.log('q obj:', qP);
    for (let q in qP.queryParams) {
      if (!qP.queryParams[q]) delete qP.queryParams[q];
      console.log('prop:', qP.queryParams[q]);
    }
    console.log('q obj2:', qP);
    this.router.navigate(['/store'], qP).then(() => {
      this.route.queryParams.subscribe((params) => {
        console.log(params);
        this.listsSer.booksByPage(params, this).then((data) => {
          this['pages'] = Math.ceil(data['total_len'] / 5);
          console.log('pages:', Math.ceil(data['total_len'] / 5));
          console.log(data);
          this.bookCache = data['items'];
          this.books = data['items'];
        });
      });
    });
  }
}
