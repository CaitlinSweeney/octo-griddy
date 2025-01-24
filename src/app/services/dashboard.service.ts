import { Injectable, signal } from '@angular/core';
import { Widget } from '../components/widget/widget.component';
import { AppAstronomyComponent } from '../features/weather/astronomy/astronomy.component';
import { ForecastComponent } from '../features/weather/forecast/forecast.component';
import { AppMarineComponent } from '../features/weather/marine/marine.component';
import { AppHistoryComponent } from '../features/weather/history/history.component';

@Injectable()

export class DashboardService {
 widgets = signal<Widget[]>([
    {
      component: ForecastComponent,
      id: 1,
      title: 'Forecast Data',
      data: {
        index: 0,
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppMarineComponent,
      title: 'Marine Data',
      id: 2,
      data: {
        index: 1,
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppHistoryComponent,
      title: 'History Data',
      id: 3,
      data: {
        index: 2,
        columns: 2,
        rows: 3,
      }
    },
    {
      component: AppAstronomyComponent,
      title: 'Astronomy Data',
      id: 4,
      data: {
        columns: 2,
        index: 3,
        rows: 3,
      }
    },
  ]);

  constructor() { }
}
