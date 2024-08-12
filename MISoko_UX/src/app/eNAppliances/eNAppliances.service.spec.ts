import { TestBed } from '@angular/core/testing';

import { ENAppliancesService } from './eNAppliances.service';

describe('ENAppliancesService', () => {
  let service: ENAppliancesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ENAppliancesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
