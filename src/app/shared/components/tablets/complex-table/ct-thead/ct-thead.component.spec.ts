import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTheadComponent } from './ct-thead.component';

describe('CtTheadComponent', () => {
  let component: CtTheadComponent;
  let fixture: ComponentFixture<CtTheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTheadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtTheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
