import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SnowyPage } from './snowy.page';

describe('SnowyPage', () => {
  let component: SnowyPage;
  let fixture: ComponentFixture<SnowyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SnowyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
