import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RockyPage } from './rocky.page';

describe('RockyPage', () => {
  let component: RockyPage;
  let fixture: ComponentFixture<RockyPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RockyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
