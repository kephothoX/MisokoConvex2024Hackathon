import { TestBed } from '@angular/core/testing';

import { LNPropertiesService } from './lNProperties.service';

describe('LNPropertiesService', () => {
  let service: LNPropertiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LNPropertiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
