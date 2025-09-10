import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KoreanCreamComponent } from './korean-cream.component';

describe('KoreanCreamComponent', () => {
  let component: KoreanCreamComponent;
  let fixture: ComponentFixture<KoreanCreamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KoreanCreamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KoreanCreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
