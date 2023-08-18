import { TestBed } from '@angular/core/testing';

import { SubskillService } from './subskill.service';

describe('SubskillService', () => {
  let service: SubskillService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubskillService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
