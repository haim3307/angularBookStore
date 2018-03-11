import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MainData} from '../../services/main-data';
import {ShopPopUpService} from '../../services/shop-pop-up.service';



@Component({
  selector: 'app-book-product-page',
  templateUrl: './book-product-page.component.html',
  styleUrls: ['./book-product-page.component.css']
})
export class BookProductPageComponent implements OnInit {
  id;
  book = {desc: '', bookPrice: '', bookImage: '', name : '', author: '', category: '', rating: '', yearOfPublish: '', id: null};
  constructor(
    private route: ActivatedRoute,
    public listsSer: MainData ,
    public shopC: ShopPopUpService,
    public router: Router,
  ) {
      this.setUP();
  }

  ngOnInit() {
      this.setUP();
  }
  navBooks(direction) {
      let numb  = direction ? parseInt(this.id) + 1 : parseInt(this.id) - 1;
      if (!direction && (parseInt(this.id) < 2)) {
          numb = this.listsSer.booksById.size;
      }
      if (direction && (parseInt(this.id) > this.listsSer.booksById.size - 1)) {
          numb = 1;
      }

      this.router.navigate(['/book', numb]).then(() => {
          this.update();
      });
  }
  setUP() {
      if (!this.listsSer.booksById) {
          this.listsSer.booksPreview().then(() => {
              this.update();
          });

      }else {
          this.update();
      }


  }
  goBack() {
      if (this.listsSer.prevPage) this.router.navigate([this.listsSer.prevPage]);
  }
  update() {
      this.id = this.route.snapshot.params['id'];
      this.book =  this.listsSer.booksById.get(parseInt(this.id));
      console.log(this.id , this.book);

  }
}
