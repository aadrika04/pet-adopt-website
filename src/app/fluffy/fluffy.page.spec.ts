import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FluffyPage } from './fluffy.page';

describe('FluffyPage', () => {
  let component: FluffyPage;
  let fixture: ComponentFixture<FluffyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(FluffyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
