import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVehicalComponent } from './add-vehical.component';

describe('AddVehicalComponent', () => {
  let component: AddVehicalComponent;
  let fixture: ComponentFixture<AddVehicalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVehicalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVehicalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
