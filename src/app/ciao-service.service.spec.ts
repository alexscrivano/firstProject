import { TestBed } from '@angular/core/testing';

import { CiaoServiceService } from './ciao-service.service';

describe('CiaoServiceService', () => {
  let service: CiaoServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiaoServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
