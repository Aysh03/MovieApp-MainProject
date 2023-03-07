import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEditCompComponent } from './admin-edit-comp.component';

describe('AdminEditCompComponent', () => {
  let component: AdminEditCompComponent;
  let fixture: ComponentFixture<AdminEditCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminEditCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminEditCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
