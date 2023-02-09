import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToEnterComponent } from './to-enter.component';

describe('ToEnterComponent', () => {
  let component: ToEnterComponent;
  let fixture: ComponentFixture<ToEnterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToEnterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToEnterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
