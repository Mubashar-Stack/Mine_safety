import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalTrackingLayoutComponent } from './environmental-tracking-layout.component';

describe('EnvironmentalTrackingLayoutComponent', () => {
  let component: EnvironmentalTrackingLayoutComponent;
  let fixture: ComponentFixture<EnvironmentalTrackingLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalTrackingLayoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalTrackingLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
