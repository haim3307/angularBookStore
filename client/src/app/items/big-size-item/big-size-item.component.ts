import { Component, OnInit, Input } from '@angular/core';
import {MainData} from '../../services/main-data';
import {SortService} from '../../services/sort.service';
import {ShopPopUpService} from '../../services/shop-pop-up.service';

@Component({
  selector: 'app-big-size-item',
  templateUrl: './big-size-item.component.html',
  styleUrls: ['./big-size-item.component.css']
})
export class BigSizeItemComponent implements OnInit {
  info = false;
  listsSer;
  sort;
  shopC;
  @Input('book')  book;
  constructor(listsSer: MainData, sort: SortService , shopC: ShopPopUpService) {
    this.listsSer = listsSer;
    this.sort = sort;
    this.shopC = shopC;
  }

  ngOnInit() {
  }
  toggleInfo(ev, $event = null) {
      if(window.innerWidth > 810) this.info = !this.info;
      else if (ev !== 'enter' && ev !== 'leave')this.info = !this.info;
      if (ev === 'click') {$event.stopPropagation(); }

  }
}
