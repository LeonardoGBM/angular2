import { TestBed } from '@angular/core/testing';

import { PrdocutService } from './prdocut.service';

describe('PrdocutService', () => {
  let service: PrdocutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrdocutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
