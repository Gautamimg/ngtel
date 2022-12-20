import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldprojectComponent } from './oldproject.component';

describe('OldprojectComponent', () => {
  let component: OldprojectComponent;
  let fixture: ComponentFixture<OldprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
