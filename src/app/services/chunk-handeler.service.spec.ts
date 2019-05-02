import { TestBed } from '@angular/core/testing';

import { ChunkHandelerService } from './chunk-handeler.service';

describe('ChunkHandelerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChunkHandelerService = TestBed.get(ChunkHandelerService);
    expect(service).toBeTruthy();
  });
});
