import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DogDetailsPage } from './dog-details.page';

describe('DogDetailsPage', () => {
  let component: DogDetailsPage;
  let fixture: ComponentFixture<DogDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DogDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
