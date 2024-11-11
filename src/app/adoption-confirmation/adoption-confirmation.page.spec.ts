import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AdoptionConfirmationPage } from './adoption-confirmation.page';

describe('AdoptionConfirmationPage', () => {
  let component: AdoptionConfirmationPage;
  let fixture: ComponentFixture<AdoptionConfirmationPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptionConfirmationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
