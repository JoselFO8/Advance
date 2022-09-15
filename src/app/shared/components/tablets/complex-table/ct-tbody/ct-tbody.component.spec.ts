import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTbodyComponent } from './ct-tbody.component';

describe('CtTbodyComponent', () => {
  let component: CtTbodyComponent;
  let fixture: ComponentFixture<CtTbodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTbodyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtTbodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
