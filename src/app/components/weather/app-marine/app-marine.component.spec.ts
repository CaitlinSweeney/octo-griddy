import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMarineComponent } from './app-marine.component';

describe('AppMarineComponent', () => {
  let component: AppMarineComponent;
  let fixture: ComponentFixture<AppMarineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMarineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppMarineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
