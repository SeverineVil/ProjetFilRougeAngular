import { TestBed } from '@angular/core/testing';

import { TypeDeBiereService } from './type-de-biere.service';
import { TypeDeBiere } from '../entities/type-de-biere';

describe('TypeDeBiereService', () => {
  let service: TypeDeBiereService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeDeBiereService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('Update type de biere', () => {
    console.log('update');
    const biere = new TypeDeBiere();
    biere.libelle = 'toto';
    service.create(biere);

    expect(biere.id).toBe(1);

    const biere2 = service.getItemById('1' as unknown as number);
    expect(biere2).toBeUndefined();

    const biere3 = service.getItemById(1);
    expect(biere3).toBeDefined();
  })

  it('Can create types de biere', () => {
    const type = new TypeDeBiere();
    console.log('ici');
    type.libelle = 'IPA';

    expect(type.id).toBeUndefined();
    const result: boolean = service.create(type);

    expect(result).toBeTrue();
    expect(type.id).toBeDefined();
    expect(type.id).toBe(1);

    const res2: boolean = service.create(type);
    expect(res2).toBeFalse();
  })
});
