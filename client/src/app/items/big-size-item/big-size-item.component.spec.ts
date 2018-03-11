import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BigSizeItemComponent } from './big-size-item.component';

describe('BigSizeItemComponent', () => {
  let component: BigSizeItemComponent;
  let fixture: ComponentFixture<BigSizeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BigSizeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BigSizeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
