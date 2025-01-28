import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { forecastResponse } from '../utils/mockForecast';
import { astronomyResponse } from '../utils/mockAstronomy';

@Injectable()
export class WeatherService {
  http = inject(HttpClient);

  getAstronomyRequest = () => {
  //  return this.http.get(this.astronomyApi)
   return of(astronomyResponse)
  };
  getForecastRequest = () => {
   // return this.http.get(this.forcasetApi)
   return of(forecastResponse)
  };

  private url = 'https://weatherapi-com.p.rapidapi.com';
  private astronomyApi = `${this.url}/astronomy.json?q=Denver&dt=2025-01-24`;
  private forcasetApi = `${this.url}/forecast.json?q=denver&days=1`;

}

// @Injectable()
// export class FakeWeatherService extends WeatherService {
//   override getAstronomyRequest = (query?: string) => {
//     return of({ something: 'whatever' })
//   };
//   constructor() {
//     super()
//   }
// }
