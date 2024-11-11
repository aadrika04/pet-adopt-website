import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NibblesPage } from './nibbles.page';

describe('NibblesPage', () => {
  let component: NibblesPage;
  let fixture: ComponentFixture<NibblesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(NibblesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
