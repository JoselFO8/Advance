import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVideoRowComponent } from './card-video-row.component';

describe('CardVideoRowComponent', () => {
  let component: CardVideoRowComponent;
  let fixture: ComponentFixture<CardVideoRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVideoRowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVideoRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
