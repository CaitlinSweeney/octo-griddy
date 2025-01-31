import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '../components/widget/widget.component';
import { AstronomyComponent } from '../features/weather/astronomy/astronomy.component';
import { ForecastComponent } from '../features/weather/forecast/forecast.component';
import { NewsComponent } from '../features/news/news.component';
import { QuoteComponent } from '../features/quote/quote.component';
import { SportsComponent } from '../features/sports/sports.component';

export const defaultWidgets = [
  {
    component: ForecastComponent,
    id: 1,
    title: 'Forecast Data',
    index: 0,
    columns: 2,
    rows: 1,
  },
  {
    component: SportsComponent,
    title: 'Sports Highlights',
    id: 2,
    index: 1,
    columns: 2,
    rows: 2,
  },
  {
    component: AstronomyComponent,
    title: 'Astronomy Data',
    id: 3,
    columns: 2,
    index: 2,
    rows: 1,
  },
  {
    component: NewsComponent,
    title: 'Top News Headlines',
    id: 4,
    index: 3,
    columns: 2,
    rows: 3,
  },
  {
    component: QuoteComponent,
    title: 'Quote of the Day',
    id: 5,
    index: 4,
    columns: 1,
    rows: 2,
  },
]

@Injectable()

export class DashboardService {
  http = inject(HttpClient);

  menuOpen = signal(false)
  addedWidgets = signal<Widget[]>([]);
  widgets = signal<Widget[]>(defaultWidgets);

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id))
  })

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }])
    localStorage.setItem('user_dashboard', JSON.stringify(this.addedWidgets()));
  }

  updateWidget(id: number, w: Partial<Widget>) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index !== -1) {
      const _newWidgets = [...this.addedWidgets()]
      _newWidgets[index] = {..._newWidgets[index], ...w}
      this.addedWidgets.set(_newWidgets);
      localStorage.setItem('user_dashboard', JSON.stringify(_newWidgets));
    }
  }

  updateWidgetPosition(sourceWidgetId: number, targetWidgetId: number) {
    const sourceIndex = this.addedWidgets().findIndex(w => w.id === sourceWidgetId);

    if (sourceIndex === -1) { return };

    const _newWidgets = [...this.addedWidgets()]
    const sourceWidget = _newWidgets.splice(sourceIndex, 1)[0];
    const targetIndex = _newWidgets.findIndex(w => w.id === targetWidgetId);

    if (targetIndex === -1) { return };

    const insertAt = targetIndex === sourceIndex ? targetIndex + 1 : targetIndex;

    _newWidgets.splice(insertAt, 0, sourceWidget)
    this.addedWidgets.set(_newWidgets);

    localStorage.setItem('user_dashboard', JSON.stringify(_newWidgets));
  }

  removeWidget(id: number) {
    const index = this.addedWidgets().findIndex(w => w.id === id);

    if (index === -1) { return };

    const _newWidgets = [...this.addedWidgets()]
    _newWidgets.splice(index, 1)
    this.addedWidgets.set(_newWidgets);

    const storedWidgets = this.addedWidgets().map(w => ({
      ...w,
      componentName: w.component.name,
    }))
    localStorage.setItem('user_dashboard', JSON.stringify(storedWidgets));
  }

  removeAllWidgets() {
    this.addedWidgets.set([]);
    localStorage.removeItem('user_dashboard');
  }
}

export interface Response {
  id: string
  slug: string
  created_at: string
  updated_at: string
  promoted_at: any
  width: number
  height: number
  color: string
  blur_hash: string
  description: string
  alt_description: string
  breadcrumbs: any[]
  urls: Urls
  asset_type: string
}


interface Urls {
  raw: string
  full: string
  regular: string
  small: string
  thumb: string
  small_s3: string
}

interface Links {
  self: string
  html: string
  download: string
  download_location: string
}
