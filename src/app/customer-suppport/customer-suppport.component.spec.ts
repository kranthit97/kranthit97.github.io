import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerSuppportComponent } from './customer-suppport.component';

describe('CustomerSuppportComponent', () => {
  let component: CustomerSuppportComponent;
  let fixture: ComponentFixture<CustomerSuppportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerSuppportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerSuppportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
