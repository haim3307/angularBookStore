import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookProductPageComponent } from './book-product-page.component';

describe('BookProductPageComponent', () => {
  let component: BookProductPageComponent;
  let fixture: ComponentFixture<BookProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
