import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableResolverComponent } from './table-resolver.component';

describe('TableResolverComponent', () => {
  let component: TableResolverComponent;
  let fixture: ComponentFixture<TableResolverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableResolverComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableResolverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
