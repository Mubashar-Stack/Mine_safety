import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalNavbarComponent } from './environmental-navbar.component';

describe('EnvironmentalNavbarComponent', () => {
  let component: EnvironmentalNavbarComponent;
  let fixture: ComponentFixture<EnvironmentalNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalNavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
