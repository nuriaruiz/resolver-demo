import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithoutResolverComponent } from './table-without-resolver.component';

describe('TableWithoutResolverComponent', () => {
  let component: TableWithoutResolverComponent;
  let fixture: ComponentFixture<TableWithoutResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableWithoutResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableWithoutResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
