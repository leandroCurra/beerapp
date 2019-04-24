import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidePromoComponent } from './slide-promo.component';

describe('SlidePromoComponent', () => {
  let component: SlidePromoComponent;
  let fixture: ComponentFixture<SlidePromoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidePromoComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidePromoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
