import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreamComponent } from './product-cream.component';

describe('ProductCreamComponent', () => {
  let component: ProductCreamComponent;
  let fixture: ComponentFixture<ProductCreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductCreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
