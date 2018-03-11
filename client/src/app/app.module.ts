import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule} from '@angular/router';

import {JsonReqsService} from './services/json-reqs.service';
import {SortService} from './services/sort.service';
import {MainData} from './services/main-data';
import {ShopPopUpService} from './services/shop-pop-up.service';

import { AppComponent } from './app.component';
import { HomePageComponent } from './main-pages/home-page/home-page.component';
import { AboutPageComponent } from './main-pages/about-page/about-page.component';
import { MainNavComponent } from './layout/main-nav/main-nav.component';
import { SortNavComponent } from './layout/sort-nav/sort-nav.component';

import { BigSizeItemComponent } from './items/big-size-item/big-size-item.component';
import { ColSizeItemComponent } from './items/col-size-item/col-size-item.component';

import { BooksByCategoryPipe } from './pipes/book-bycatgory.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { BooksByRatingPipe } from './pipes/books-by-rating.pipe';
import { CartPopUpComponent } from './special-components/cart-pop-up/cart-pop-up.component';
import { BookProductPageComponent } from './sub-pages/book-product-page/book-product-page.component';
import { AuthorProductPageComponent } from './sub-pages/author-product-page/author-product-page.component';
import { ToPayPageComponent } from './sub-pages/to-pay-page/to-pay-page.component';
import { StorePageComponent } from './main-pages/store-page/store-page.component';

import { OrderByPipe } from './pipes/order-by.pipe';
import { InStockPipe } from './pipes/in-stock.pipe';
import { BySearchPipe } from './pipes/by-search.pipe';
import { LimitToPipe } from './pipes/limit-to.pipe';
import { ByYearPipe } from './pipes/by-year.pipe';
import { ByLetterPipe } from './pipes/by-letter.pipe';
import { StockOnlyPipe } from './pipes/stock-only.pipe';
import { ContactPageComponent } from './main-pages/contact-page/contact-page.component';
import { PagerComponent } from './special-components/pager/pager.component';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    StorePageComponent,
    MainNavComponent,
    SortNavComponent,
    BooksByCategoryPipe,
    TranslatePipe,
    BooksByRatingPipe,
    CartPopUpComponent,
    BookProductPageComponent,
    AuthorProductPageComponent,
    ToPayPageComponent,
    BigSizeItemComponent,
    ColSizeItemComponent,
    OrderByPipe,
    InStockPipe,
    BySearchPipe,
    LimitToPipe,
    ByYearPipe,
    ByLetterPipe,
    StockOnlyPipe,
    PagerComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot([
        {path: '', redirectTo: 'home', pathMatch: 'full'},
        {path: 'home' , component: HomePageComponent,data:{title:'דף הבית'}},
        {path: 'about' , component: AboutPageComponent,data:{title:'אודות'}},
        {path: 'store' , component: StorePageComponent,data:{title:'החנות'}},
        {path: 'contact' , component: ContactPageComponent,data:{title:'צור קשר'}},
        {path: 'book/:id' , component: BookProductPageComponent},
        {path: 'author/:authid' , component: AuthorProductPageComponent},
        {path: 'toPayPage' , component: ToPayPageComponent}
      ], {useHash: true})
  ],
  providers: [JsonReqsService, SortService, MainData, ShopPopUpService,Title],
  bootstrap: [AppComponent]
})
export class AppModule {}
