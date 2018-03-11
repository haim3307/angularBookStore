import { TestBed, inject } from '@angular/core/testing';

import { MainData } from './main-data';

describe('MainData', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MainData]
    });
  });

  it('should be created', inject([MainData], (service: MainData) => {
    expect(service).toBeTruthy();
  }));
});
