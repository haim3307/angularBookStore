import {Component, EventEmitter, Input, OnInit, Output, SimpleChange, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-pager',
  templateUrl: './pager.component.html',
  styleUrls: ['./pager.component.css']
})
export class PagerComponent implements OnInit {
  @Input('pages') pages;
  @Output('onPageSelect') onPageSelect = new EventEmitter();
  rangeArr: number[] = [];
  constructor() {

  }
  emitPageSelect(page){
    this.onPageSelect.emit(page);
  }

  ngOnInit() {
    console.log('initPages',this.pages);
    this.rangePages();
  }
  rangePages(){
    this.rangeArr = [];
    for (let x = 0; x < this.pages; this.rangeArr.push(x++));
  }
  ngOnChanges(changes: SimpleChange) {
    if(changes['pages']) this.rangePages();;
  }


}
