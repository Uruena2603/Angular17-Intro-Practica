import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardChildComponent } from './dashboard-child.component';

describe('DashboardChildComponent', () => {
  let component: DashboardChildComponent;
  let fixture: ComponentFixture<DashboardChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardChildComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
