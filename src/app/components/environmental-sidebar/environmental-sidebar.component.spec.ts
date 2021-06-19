import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvironmentalSidebarComponent } from './environmental-sidebar.component';

describe('EnvironmentalSidebarComponent', () => {
  let component: EnvironmentalSidebarComponent;
  let fixture: ComponentFixture<EnvironmentalSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvironmentalSidebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvironmentalSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
