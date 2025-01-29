import { Injectable, signal, inject, computed } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Widget } from '../components/widget/widget.component';
import { AstronomyComponent } from '../features/weather/astronomy/astronomy.component';
import { ForecastComponent } from '../features/weather/forecast/forecast.component';
import { NewsComponent } from '../features/news/news.component';
import { QuoteComponent } from '../features/quote/quote.component';
import { SportsComponent } from '../features/sports/sports.component';

@Injectable()

export class DashboardService {
  http = inject(HttpClient);
  backgroundImage = signal<Response | null>(null)
  menuOpen = signal(false)
  widgets = signal<Widget[]>([
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
      index: 2,
      columns: 2,
      rows: 2,
    },
    {
      component: AstronomyComponent,
      title: 'Astronomy Data',
      id: 3,
      columns: 2,
      index: 1,
      rows: 1,
    },
    {
      component: NewsComponent,
      title: 'Top News Headlines',
      id: 4,
      index: 3,
      columns: 3,
      rows: 3,
    },
    {
      component: QuoteComponent,
      title: 'Todays Quote',
      id: 5,
      index: 3,
      columns: 1,
      rows: 2,
    },
  ]);
  addedWidgets = signal<Widget[]>([]);

  getBackgroundImage = () => this.http.get('https://api.unsplash.com/photos/?per_page=1').subscribe(res => this.backgroundImage.set((res as Response[])[0]))

  widgetsToAdd = computed(() => {
    const addedIds = this.addedWidgets().map(w => w.id);
    return this.widgets().filter(w => !addedIds.includes(w.id))
  })

  addWidget(w: Widget) {
    this.addedWidgets.set([...this.addedWidgets(), { ...w }])
  }

  updateWidget(id: number, w: Partial<Widget>) {
    const index = this.addedWidgets().findIndex(w => w.id === id);
    if (index !== -1) {
      const newWidgets = [...this.addedWidgets()]
      newWidgets[index] = {...newWidgets[index], ...w}
      this.addedWidgets.set(newWidgets);
    }
  }

  constructor() {}
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
