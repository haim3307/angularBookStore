import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColSizeItemComponent } from './col-size-item.component';

describe('ColSizeItemComponent', () => {
  let component: ColSizeItemComponent;
  let fixture: ComponentFixture<ColSizeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColSizeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColSizeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
