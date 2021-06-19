import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDeviceAssociationComponent } from './list-device-association.component';

describe('ListDeviceAssociationComponent', () => {
  let component: ListDeviceAssociationComponent;
  let fixture: ComponentFixture<ListDeviceAssociationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListDeviceAssociationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListDeviceAssociationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
