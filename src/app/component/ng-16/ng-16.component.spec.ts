import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ng16Component } from './ng-16.component';

describe('Ng16Component', () => {
  let component: Ng16Component;
  let fixture: ComponentFixture<Ng16Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ng16Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Ng16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
