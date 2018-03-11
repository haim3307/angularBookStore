import { Component, OnInit } from '@angular/core';
import {SortService} from '../../services/sort.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
    public allInput = false;
    public halfO = false;
    constructor(public sort: SortService) {}

    toggle() {
        this.sort.allInputs = !this.sort.allInputs;
    }
  ngOnInit() {}
  mobileWindow () {
      this.halfO = !this.halfO;
  }


}
