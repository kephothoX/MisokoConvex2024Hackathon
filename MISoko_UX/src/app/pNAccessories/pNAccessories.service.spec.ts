import { TestBed } from '@angular/core/testing';

import { PNAccessoriesService } from './pNAccessories.service';

describe('PNAccessoriesService', () => {
  let service: PNAccessoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PNAccessoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
