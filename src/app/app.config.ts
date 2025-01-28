import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';

import { routes } from './app.routes';
import { WeatherService } from './services/weather.service';
import { NewsService } from './services/news.service';
import { QuotesService } from './services/quotes.service';
import { apiInterceptor } from './interceptors/api.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptors([apiInterceptor])),
    {provide: WeatherService, useClass: WeatherService},
    {provide: NewsService, useClass: NewsService},
    {provide: QuotesService, useClass: QuotesService},
  ]
};
