import { Component, OnInit } from '@angular/core';
import {ShopPopUpService} from '../../services/shop-pop-up.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart-pop-up',
  templateUrl: './cart-pop-up.component.html',
  styleUrls: ['./cart-pop-up.component.css']
})
export class CartPopUpComponent implements OnInit {

    bagHide;
    orderNum;
    pTotalPrice;
    totalCost;
    book;
    constructor(public shopC: ShopPopUpService, private router: Router) {
        this.bagHide = true;
        this.orderNum = 1;
        this.pTotalPrice = 0;
        this.totalCost = 0;
    }
    toggleBag () {
        this.bagHide = !this.bagHide;
    }
    toBuy() {
        this.router.navigate(['toPayPage']);
    }


  ngOnInit() {
  }

}
