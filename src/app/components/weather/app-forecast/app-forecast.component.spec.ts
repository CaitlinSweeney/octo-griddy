import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppForecastComponent } from './app-forecast.component';

describe('AppForecastComponent', () => {
  let component: AppForecastComponent;
  let fixture: ComponentFixture<AppForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppForecastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
