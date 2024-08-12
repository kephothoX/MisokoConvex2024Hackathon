import { TestBed } from '@angular/core/testing';

import { AutoMobilesService } from './autoMobiles.service';

describe('AutoMobilesService', () => {
  let service: AutoMobilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoMobilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
