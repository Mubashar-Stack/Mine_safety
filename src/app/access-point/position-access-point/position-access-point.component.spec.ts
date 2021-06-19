import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionAccessPointComponent } from './position-access-point.component';

describe('PositionAccessPointComponent', () => {
  let component: PositionAccessPointComponent;
  let fixture: ComponentFixture<PositionAccessPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionAccessPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionAccessPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
