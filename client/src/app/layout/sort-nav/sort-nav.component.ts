import {Component, OnInit, Input, SimpleChange, Output, EventEmitter} from '@angular/core';
import {SortService} from '../../services/sort.service';
import {MainData} from '../../services/main-data';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
    selector: 'app-sort-nav',
    templateUrl: './sort-nav.component.html',
    styleUrls: ['./sort-nav.component.css']
})
export class SortNavComponent implements OnInit {
    window = window;
    @Output('onFilter')  filterEvent = new EventEmitter();
    @Input() mode;

    @Input() categories = false;
    @Input() authorsList = false;
    @Input() yearsList;
    @Input() nameList = false;
    @Input() booksById = false;
    @Input() storeMode = false;

    constructor(public sort: SortService, public listsSer: MainData,private router:Router,private route:ActivatedRoute) {
      if(!this.yearsList )  this.yearsList = listsSer.yearsList;
    }
    ngOnInit() {  }
    update() {
        console.log('hi');
    }
    ngOnChanges(change: SimpleChange){
      console.log('onChangeObj:',change);
    }
    inputChange(input,val){
      let qP;
      if(this.storeMode){
        console.log(input,val);
        switch (input){
          case 'cate':
            console.log(this.listsSer.cate);
            let keys = Object.keys(this.listsSer.cate),selected = [];
            for(let x = 0; x<keys.length; x++){
              if(this.listsSer.cate[keys[x]]) selected.push(keys[x]);
            }
            console.log('cates',selected.join(','));
            qP =  {queryParams:{cates:selected.join(',')}, queryParamsHandling: 'merge'};
            break;
          case 'orderItems':
            if(val[0] == '-' || val[0] == '+') {
                var order =  val.substr(1,val.length);
                var direction = val;
                console.log('plus/minus');
            }
            qP = {queryParams:{orderby:order,[order]:direction}};
            break;
          case 'year':
                qP =  {queryParams:{year:this.sort.sortYear(val)}, queryParamsHandling: 'merge'};
        }
        if(!qP) return;
        this.filterEvent.emit(qP);
        }

    }
}
