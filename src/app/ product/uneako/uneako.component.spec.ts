import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UneakoComponent } from './uneako.component';

describe('UneakoComponent', () => {
  let component: UneakoComponent;
  let fixture: ComponentFixture<UneakoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UneakoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UneakoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
