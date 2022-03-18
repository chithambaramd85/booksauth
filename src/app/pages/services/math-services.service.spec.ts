import { TestBed } from '@angular/core/testing';

import { MathServicesService } from './math-services.service';

describe('MathServicesService', () => {
  let service: MathServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MathServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
