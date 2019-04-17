import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleRoutinesComponent } from './sample-routines.component';

describe('SampleRoutinesComponent', () => {
  let component: SampleRoutinesComponent;
  let fixture: ComponentFixture<SampleRoutinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SampleRoutinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleRoutinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
