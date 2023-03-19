import { TestBed } from '@angular/core/testing';
import { ItemResolver } from './item-resolver.resolver';


describe('PersonResolverResolver', () => {
  let resolver: ItemResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(ItemResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
