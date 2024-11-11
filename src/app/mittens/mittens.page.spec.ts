import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MittensPage } from './mittens.page';

describe('MittensPage', () => {
  let component: MittensPage;
  let fixture: ComponentFixture<MittensPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MittensPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
