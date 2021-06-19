import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAccessPointComponent } from './add-access-point.component';

describe('AddAccessPointComponent', () => {
  let component: AddAccessPointComponent;
  let fixture: ComponentFixture<AddAccessPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAccessPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAccessPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
