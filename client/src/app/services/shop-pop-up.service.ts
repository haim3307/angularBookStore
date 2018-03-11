import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class ShopPopUpService {
    localArr;
    bagBooks;
    MapToArr;
    bagTotalCost: number;
    bagTotalCostWithTax: number;
    totalUnits: number;
    book: object;
    constructor(public router: Router) {
        this.localArr = localStorage.bagBooks ? JSON.parse(localStorage.bagBooks) : localStorage.bagBooks;
        this.bagBooks = this.localArr ? new Map(this.localArr) : new Map();
        this.MapToArr = Array.from(this.bagBooks.entries());
        this.allCostChildren();

    }
    costXnumber = (book): number =>  book.quantity * book.bookPrice;

    inc (book): void {
        if (!book.quantity) {book.quantity = 1; }
        book.quantity++;
        book.pTotalPrice = this.costXnumber(book);
        if (this.bagBooks.has(book.id)) {
            this.bagBooks.set(book.id, book);
            this.WatchBagBooks();
        }
    }
    dec (book): void  {
        if (book.quantity > 1) {
            book.quantity--;
            book.pTotalPrice = this.costXnumber(book);
            if (this.bagBooks.has(book.id)) {
                this.bagBooks.set(book.id, book);
                this.WatchBagBooks();
            }

        }
    }
    addToCart(book, $event = null): void {
        if ($event) {$event.stopPropagation(); }
        if (!book.quantity) {book.quantity = 1; }
        book.pTotalPrice = book.bookPrice * book.quantity;
        this.bagBooks.set(book.id, book);
        this.allCostChildren();
        this.WatchBagBooks(this.bagBooks);
    }
    deleteCartItem (book): void {
        book.pTotalPrice = book.bookPrice;
        this.bagBooks.delete(book.id);
        this.allCostChildren();
        this.WatchBagBooks(this.bagBooks);

    }
    allCostChildren (): void {
        let totalP = 0, totalUnits = 0;
        this.bagBooks.forEach((value) => {
            totalP += value.pTotalPrice;
            totalUnits += value.quantity;
        });
        this.bagTotalCost = totalP;
        this.bagTotalCostWithTax =  this.bagTotalCost + (this.bagTotalCost * 0.18);
        this.totalUnits = totalUnits;

    }
    WatchBagBooks(bagBooks = this.bagBooks): void {
        this.MapToArr = Array.from(bagBooks.entries());
        localStorage.setItem('bagBooks', JSON.stringify(this.MapToArr));
        this.allCostChildren();

    }
    payNow(theBookProduct): void {
        this.addToCart(theBookProduct, null);
        this.router.navigate(['toPayPage']);
    }
}
