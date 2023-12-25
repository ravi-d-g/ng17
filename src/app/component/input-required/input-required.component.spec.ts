import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRequiredComponent } from './input-required.component';

describe('InputRequiredComponent', () => {
  let component: InputRequiredComponent;
  let fixture: ComponentFixture<InputRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputRequiredComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InputRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
