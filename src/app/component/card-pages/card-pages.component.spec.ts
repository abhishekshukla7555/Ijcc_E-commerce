import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPagesComponent } from './card-pages.component';

describe('CardPagesComponent', () => {
  let component: CardPagesComponent;
  let fixture: ComponentFixture<CardPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardPagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
