import { Component, OnInit } from '@angular/core';
import {ShopPopUpService} from '../../services/shop-pop-up.service';
import {MainData} from '../../services/main-data';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {JsonReqsService} from '../../services/json-reqs.service';


@Component({
  selector: 'app-author-product-page',
  templateUrl: './author-product-page.component.html',
  styleUrls: ['./author-product-page.component.css']
})
export class AuthorProductPageComponent implements OnInit {
    books;
    authorsDet;
    author = {name: '', desc: '' , yearOfBorn: '' , lDesc: '' , profile: ''};
    authBooks = [{}];
    authid;
    constructor(
                private listsSer: MainData ,
                private jrs: JsonReqsService,
                private route: ActivatedRoute,
    ) {}
    ngOnInit() {
        this.authid = this.route.snapshot.params['authid'];
        if (!this.listsSer.authorsDet) {
            this.jrs.getAuthorsDet().subscribe( (res) => {

                this.listsSer.authorsDet = res['authors'];
                this.authorsDet = this.listsSer.authorsDet;
                this.listsSer.authLoop();
                this.author = this.listsSer.authorsMapById.get(parseInt(this.authid));
                this.listsSer.booksPreview().then( () => {
                    this.filterBookbyAuth();
                });

            });
        }else {
            this.authorsDet = this.listsSer.authorsDet;
            console.log(this.authorsDet);
            this.author = this.listsSer.authorsMapById.get(parseInt(this.authid));
            console.log(this.author);

            this.listsSer.booksPreview().then( () => {
                this.filterBookbyAuth();
            });


        }
    }
    filterBookbyAuth () {
        this.authBooks = this.listsSer.books.filter((book) => {
            console.log( book.author, this.author.name);
            return book.author === this.author.name;
        });
    }

    findAuth () {
        /*
        let book, $id = this.authid;
        console.log($id);
        if (parseInt($id)) {
            console.log(typeof parseInt($id));
            for (const num in this.listsSer.bookCache) {
                if(this.listsSer.bookCache[num].id == $id) book = this.listsSer.bookCache[num];
            }
            if (book) this.router.navigate(['/book', book.id]);

            else if (!book && ($id > this.listsSer.bookCache.length)) {
                this.router.navigate(['/book', 1]);
            }
            //if(!book && !$id) window.location = '#!/book/'+15;

            return book;
        }else {
            $id = $id.replace(/-/g , ' ');
            let $num = this.authBooks.get($id), book = {};
            for(let num in this.listsSer.bookCache) {
                if(this.listsSer.bookCache[num].id == $num) book = this.listsSer.bookCache[num];
            }

            // this.router.navigate(['/authors', book.id]);

            return book;
        }*/

        }


}
