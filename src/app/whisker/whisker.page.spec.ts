import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WhiskerPage } from './whisker.page';

describe('WhiskerPage', () => {
  let component: WhiskerPage;
  let fixture: ComponentFixture<WhiskerPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WhiskerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
