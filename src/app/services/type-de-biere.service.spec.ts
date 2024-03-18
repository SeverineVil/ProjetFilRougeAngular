import { TestBed } from '@angular/core/testing';

import { TypeDeBiereService } from './type-de-biere.service';

describe('TypeDeBiereService', () => {
  let service: TypeDeBiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeBiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
