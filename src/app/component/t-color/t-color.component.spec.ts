import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TColorComponent } from './t-color.component';

describe('TColorComponent', () => {
  let component: TColorComponent;
  let fixture: ComponentFixture<TColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TColorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
