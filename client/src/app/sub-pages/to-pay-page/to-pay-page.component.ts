import { Component, OnInit } from '@angular/core';
import {ShopPopUpService} from '../../services/shop-pop-up.service';

@Component({
  selector: 'app-to-pay-page',
  templateUrl: './to-pay-page.component.html',
  styleUrls: ['./to-pay-page.component.css']
})
export class ToPayPageComponent implements OnInit {
  constructor(public shopC: ShopPopUpService) { }

  ngOnInit() {
  }

}
