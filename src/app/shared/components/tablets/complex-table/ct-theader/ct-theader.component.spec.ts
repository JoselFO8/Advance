import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTheaderComponent } from './ct-theader.component';

describe('CtTheaderComponent', () => {
  let component: CtTheaderComponent;
  let fixture: ComponentFixture<CtTheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTheaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtTheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
