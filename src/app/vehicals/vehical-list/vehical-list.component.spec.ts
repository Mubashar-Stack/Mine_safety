import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicalListComponent } from './vehical-list.component';

describe('VehicalListComponent', () => {
  let component: VehicalListComponent;
  let fixture: ComponentFixture<VehicalListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicalListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicalListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
