import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceSelectorComponent } from './pace-selector.component';

describe('PaceSelectorComponent', () => {
  let component: PaceSelectorComponent;
  let fixture: ComponentFixture<PaceSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaceSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
