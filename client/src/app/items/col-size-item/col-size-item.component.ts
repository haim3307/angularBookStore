import { Component, OnInit, Input } from '@angular/core';
import {MainData} from '../../services/main-data';
import {SortService} from '../../services/sort.service';
import {ShopPopUpService} from '../../services/shop-pop-up.service';

@Component({
  selector: 'app-col-size-item',
  templateUrl: './col-size-item.component.html',
  styleUrls: ['./col-size-item.component.css']
})
export class ColSizeItemComponent implements OnInit {
    showIsbn = false;
    listsSer;
    sort;
    shopC;
    @Input('book') book;
    @Input('buyMode') buyMode;
    constructor(listSer: MainData, sort: SortService , shopC: ShopPopUpService) {
        this.listsSer = listSer;
        this.sort = sort;
        this.shopC = shopC;
    }
  ngOnInit() {
  }

}
