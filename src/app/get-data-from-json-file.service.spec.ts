import { TestBed } from '@angular/core/testing';

import { GetDataFromJsonFileService } from './get-data-from-json-file.service';

describe('GetDataFromJsonFileService', () => {
  let service: GetDataFromJsonFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataFromJsonFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
