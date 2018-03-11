import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {JsonReqsService} from './json-reqs.service';

@Injectable()
export class MainData {
    categories = [];
    cate = {};
    bookCache = [];
    lists = [];
    books = [];
    authorsList = [];
    yearsList = [];
    nameList = [];
    booksById;
    authorsDet;
    authorsMapById;
    autNameToId;
    prevPage;
    constructor(private router: Router , private jrs: JsonReqsService) {  }
    toBookPage(book, direction) {
        this.prevPage = this.router.url;
        if(!direction) this.router.navigate(['/book', book.id]);
    }

    booksPreview() {
        return new Promise((resolve, reject) => {
            this.jrs.booksHttpReqAll().subscribe((data) => {
                console.log('res:',data);
                const res = data['items'];
                this.bookCache = res;
                this.lists = this.makeLists(res);
                [this.categories, this.authorsList, this.yearsList, this.nameList, this.booksById] = this.lists;
                this.books =  res;
                resolve();
            });
        });
    }
    booksByPage(params={},requester = null){
      return new Promise((resolve, reject) => {
        console.log('mainData:',params);
        this.jrs.booksHttpReq(params).subscribe((data) => {
          console.log('res:',data);
          console.log('requester:',requester);
/*      requester.bookCache = res;
        requester.books =  res;*/
          resolve(data);
        });
      });
    }
    makeLists(allBooks) {
      const categories = new Set() , authorsList = new Set() , yearsList = new Set() , nameList = new Map(), booksById = new Map();
      for (const book of allBooks) {
        categories.add(book.category);
        if(!this.cate[book.category]) this.cate[book.category] = false;

        authorsList.add({ name: book.author });
        yearsList.add(book.yearOfPublish);
        nameList.set(book.name , book.id);
        booksById.set(book.id, book);
      }
      return [categories, authorsList, yearsList, nameList, booksById];
    }
    expandAutInfo(auth) {
        if (!this.authorsDet) {
            this.jrs.getAuthorsDet().subscribe((res) => {
                this.authorsDet = res['authors'];
                this.authLoop();
                auth.authorData = this.authorsMapById.get(this.autNameToId.get(auth.name));
                auth.expand = !auth.expand;
            });
        } else {
            auth.authorData = this.authorsMapById.get(this.autNameToId.get(auth.name));
            auth.expand = !auth.expand;
        }

    }
    authLoop() {
        const a = new Map(), b = new Map();
        for (const author of  this.authorsDet){
            a.set(author.id, author);
            b.set(author.name, author.id);
        }
        this.authorsMapById = a;
        this.autNameToId = b;
    }

}
