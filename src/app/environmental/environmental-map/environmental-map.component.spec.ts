import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalMapComponent } from './environmental-map.component';

describe('EnvironmentalMapComponent', () => {
  let component: EnvironmentalMapComponent;
  let fixture: ComponentFixture<EnvironmentalMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
