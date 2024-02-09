import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreshNewLookComponent } from './fresh-new-look.component';

describe('FreshNewLookComponent', () => {
  let component: FreshNewLookComponent;
  let fixture: ComponentFixture<FreshNewLookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FreshNewLookComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FreshNewLookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
