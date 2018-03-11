import {Component} from '@angular/core';
import {SortService} from './services/sort.service';
import {Title} from "@angular/platform-browser";
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fixed;

  constructor(public sort: SortService, private titleService: Title, private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let title = this.getTitle(router.routerState, router.routerState.root).join('-') + ' - על המדף';
        console.log('title', title);
        titleService.setTitle(title);
      }
    });
    this.fixed = window.pageYOffset > 200;
  }
  getTitle(state, parent) {
    const data = [];
    if(parent && parent.snapshot.data && parent.snapshot.data.title) {
      data.push(parent.snapshot.data.title);
    }

    if(state && parent) {
      data.push(... this.getTitle(state, state.firstChild(parent)));
    }
    return data;
  }
  updateFixed() {
    this.fixed = window.pageYOffset > 200;
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
