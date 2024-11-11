import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PepperPage } from './pepper.page';

describe('PepperPage', () => {
  let component: PepperPage;
  let fixture: ComponentFixture<PepperPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PepperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
