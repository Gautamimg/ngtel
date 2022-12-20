import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnfrmpswComponent } from './cnfrmpsw.component';

describe('CnfrmpswComponent', () => {
  let component: CnfrmpswComponent;
  let fixture: ComponentFixture<CnfrmpswComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CnfrmpswComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CnfrmpswComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
