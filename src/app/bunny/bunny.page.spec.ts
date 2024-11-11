import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BunnyPage } from './bunny.page';

describe('BunnyPage', () => {
  let component: BunnyPage;
  let fixture: ComponentFixture<BunnyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BunnyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
