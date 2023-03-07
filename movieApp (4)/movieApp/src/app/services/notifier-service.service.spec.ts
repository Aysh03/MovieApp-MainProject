import { TestBed } from '@angular/core/testing';

import { NotifierServiceService } from './notifier-service.service';

describe('NotifierServiceService', () => {
  let service: NotifierServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotifierServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
