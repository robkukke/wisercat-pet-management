import { TestBed } from '@angular/core/testing';

import { FurColorService } from './furcolor.service';

describe('FurColorService', () => {
  let service: FurColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FurColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
