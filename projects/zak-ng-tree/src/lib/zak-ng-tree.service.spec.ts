import { TestBed } from '@angular/core/testing';

import { ZakNgTreeService } from './zak-ng-tree.service';

describe('ZakNgTreeService', () => {
  let service: ZakNgTreeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ZakNgTreeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
