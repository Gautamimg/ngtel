import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdftomailComponent } from './pdftomail.component';

describe('PdftomailComponent', () => {
  let component: PdftomailComponent;
  let fixture: ComponentFixture<PdftomailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdftomailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdftomailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
