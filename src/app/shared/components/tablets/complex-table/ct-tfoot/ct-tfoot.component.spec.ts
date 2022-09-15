import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtTfootComponent } from './ct-tfoot.component';

describe('CtTfootComponent', () => {
  let component: CtTfootComponent;
  let fixture: ComponentFixture<CtTfootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CtTfootComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CtTfootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
