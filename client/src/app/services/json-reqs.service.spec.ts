import { TestBed, inject } from '@angular/core/testing';
import { JsonReqsService } from './json-reqs.service';

describe('JsonReqsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonReqsService]
    });
  });

  it('should be created', inject([JsonReqsService], (service: JsonReqsService) => {
    expect(service).toBeTruthy();
  }));
});
