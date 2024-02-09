import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPComponent } from './card-p.component';

describe('CardPComponent', () => {
  let component: CardPComponent;
  let fixture: ComponentFixture<CardPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
