import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToPayPageComponent } from './to-pay-page.component';

describe('ToPayPageComponent', () => {
  let component: ToPayPageComponent;
  let fixture: ComponentFixture<ToPayPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToPayPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToPayPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
