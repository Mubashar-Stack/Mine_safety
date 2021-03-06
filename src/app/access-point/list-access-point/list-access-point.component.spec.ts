import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAccessPointComponent } from './list-access-point.component';

describe('ListAccessPointComponent', () => {
  let component: ListAccessPointComponent;
  let fixture: ComponentFixture<ListAccessPointComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAccessPointComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAccessPointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
