import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuicklistingComponent } from './quicklisting.component';

describe('QuicklistingComponent', () => {
  let component: QuicklistingComponent;
  let fixture: ComponentFixture<QuicklistingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuicklistingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuicklistingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
