import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDeviceAssociationComponent } from './add-device-association.component';

describe('AddDeviceAssociationComponent', () => {
  let component: AddDeviceAssociationComponent;
  let fixture: ComponentFixture<AddDeviceAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDeviceAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDeviceAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
