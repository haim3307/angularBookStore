import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortNavComponent } from './sort-nav.component';

describe('SortNavComponent', () => {
  let component: SortNavComponent;
  let fixture: ComponentFixture<SortNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
