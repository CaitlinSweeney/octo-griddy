import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAstronomyComponent } from './app-astronomy.component';

describe('AppAstronomyComponent', () => {
  let component: AppAstronomyComponent;
  let fixture: ComponentFixture<AppAstronomyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppAstronomyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppAstronomyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
