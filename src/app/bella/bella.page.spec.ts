import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BellaPage } from './bella.page';

describe('BellaPage', () => {
  let component: BellaPage;
  let fixture: ComponentFixture<BellaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BellaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
