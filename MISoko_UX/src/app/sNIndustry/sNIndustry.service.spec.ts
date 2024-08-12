import { TestBed } from '@angular/core/testing';

import { SNIndustryService } from './sNIndustry.service';

describe('SNIndustryService', () => {
  let service: SNIndustryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SNIndustryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
