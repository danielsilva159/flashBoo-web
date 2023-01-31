import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyEpubComponent } from './ready-epub.component';

describe('ReadyEpubComponent', () => {
  let component: ReadyEpubComponent;
  let fixture: ComponentFixture<ReadyEpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadyEpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadyEpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
