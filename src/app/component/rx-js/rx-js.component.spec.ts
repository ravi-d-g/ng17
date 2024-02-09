import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxJsComponent } from './rx-js.component';

describe('RxJsComponent', () => {
  let component: RxJsComponent;
  let fixture: ComponentFixture<RxJsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxJsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RxJsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
