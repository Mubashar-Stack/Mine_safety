import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListWifiTagsComponent } from './list-wifi-tags.component';

describe('ListWifiTagsComponent', () => {
  let component: ListWifiTagsComponent;
  let fixture: ComponentFixture<ListWifiTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListWifiTagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListWifiTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
