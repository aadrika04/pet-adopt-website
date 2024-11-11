import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RabbitDetailsPage } from './rabbit-details.page';

describe('RabbitDetailsPage', () => {
  let component: RabbitDetailsPage;
  let fixture: ComponentFixture<RabbitDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
