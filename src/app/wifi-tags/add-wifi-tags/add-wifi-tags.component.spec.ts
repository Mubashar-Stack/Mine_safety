import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWifiTagsComponent } from './add-wifi-tags.component';

describe('AddWifiTagsComponent', () => {
  let component: AddWifiTagsComponent;
  let fixture: ComponentFixture<AddWifiTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddWifiTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWifiTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
