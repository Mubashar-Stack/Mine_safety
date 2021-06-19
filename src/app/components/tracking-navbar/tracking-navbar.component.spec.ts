import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackingNavbarComponent } from './tracking-navbar.component';

describe('TrackingNavbarComponent', () => {
  let component: TrackingNavbarComponent;
  let fixture: ComponentFixture<TrackingNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackingNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackingNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
