import { TestBed } from '@angular/core/testing';

import { ActionComponentService } from './action-component.service';

describe('ActionComponentService', () => {
  let service: ActionComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
