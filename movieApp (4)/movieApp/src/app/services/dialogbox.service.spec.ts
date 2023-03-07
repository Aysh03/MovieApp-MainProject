import { TestBed } from '@angular/core/testing';

import { DialogboxService } from './dialogbox.service';

describe('DialogboxService', () => {
  let service: DialogboxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DialogboxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
