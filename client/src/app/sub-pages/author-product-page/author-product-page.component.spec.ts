import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorProductPageComponent } from './author-product-page.component';

describe('AuthorProductPageComponent', () => {
  let component: AuthorProductPageComponent;
  let fixture: ComponentFixture<AuthorProductPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorProductPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
