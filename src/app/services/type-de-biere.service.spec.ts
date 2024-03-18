import { TestBed } from '@angular/core/testing';

import { TypeDeBiereService } from './type-de-biere.service';
import { TypeDeBiere } from '../entities/type-de-biere';

fdescribe('TypeDeBiereService', () => {
  let service: TypeDeBiereService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeBiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Can create types de biere', () => {
    const type = new TypeDeBiere();
    console.log('ici');
    type.libelle = 'IPA';

    expect(type.id).toBeUndefined();
    const result: boolean = service.createTypeDeBiere(type);

    expect(result).toBeTrue();
    expect(type.id).toBeDefined();
    expect(type.id).toBe(1);

    const res2: boolean = service.createTypeDeBiere(type);
    expect(res2).toBeFalse();
  })
});
