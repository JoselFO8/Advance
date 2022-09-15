import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTfooterComponent } from './ct-tfooter.component';

describe('CtTfooterComponent', () => {
  let component: CtTfooterComponent;
  let fixture: ComponentFixture<CtTfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTfooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtTfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
