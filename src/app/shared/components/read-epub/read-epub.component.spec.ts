import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEpubComponent } from './read-epub.component';

describe('ReadEpubComponent', () => {
  let component: ReadEpubComponent;
  let fixture: ComponentFixture<ReadEpubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEpubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEpubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
