import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnOrdersPageComponent } from './return-orders-page.component';

describe('ReturnOrdersPageComponent', () => {
  let component: ReturnOrdersPageComponent;
  let fixture: ComponentFixture<ReturnOrdersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ReturnOrdersPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReturnOrdersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
