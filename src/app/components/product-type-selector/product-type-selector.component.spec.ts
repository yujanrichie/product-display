import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTypeSelectorComponent } from './product-type-selector.component';

describe('ProductTypeSelectorComponent', () => {
  let component: ProductTypeSelectorComponent;
  let fixture: ComponentFixture<ProductTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
