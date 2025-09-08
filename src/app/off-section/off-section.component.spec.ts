import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffSectionComponent } from './off-section.component';

describe('OffSectionComponent', () => {
  let component: OffSectionComponent;
  let fixture: ComponentFixture<OffSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OffSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
