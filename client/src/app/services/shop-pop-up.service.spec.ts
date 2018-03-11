import { TestBed, inject } from '@angular/core/testing';

import { ShopPopUpService } from './shop-pop-up.service';

describe('ShopPopUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopPopUpService]
    });
  });

  it('should be created', inject([ShopPopUpService], (service: ShopPopUpService) => {
    expect(service).toBeTruthy();
  }));
});
