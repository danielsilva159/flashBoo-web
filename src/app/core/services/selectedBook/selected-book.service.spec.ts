import { TestBed } from '@angular/core/testing';

import { SelectedBookService } from './selected-book.service';

describe('SelectedBookService', () => {
  let service: SelectedBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
