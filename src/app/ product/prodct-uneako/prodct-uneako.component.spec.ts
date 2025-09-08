import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdctUneakoComponent } from './prodct-uneako.component';

describe('ProdctUneakoComponent', () => {
  let component: ProdctUneakoComponent;
  let fixture: ComponentFixture<ProdctUneakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProdctUneakoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdctUneakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
