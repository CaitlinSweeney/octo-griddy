import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { of } from 'rxjs';
// import { sportsResponse } from '../utils/mockSports';
// import { newsResponse } from '../utils/mockNews';
// import { forecastResponse } from '../utils/mockForecast';
// import { astronomyResponse } from '../utils/mockAstronomy';

@Injectable()
export class ApiService {
  http = inject(HttpClient);

  getTopHeadlinesRequest = (country?: string, size?: string) => {
    return this.http.get(`${this.newsUrl}/top-headlines?country=${country || 'us'}&pageSize=${size || '5'}`)
    // return of(newsResponse)
  };
  getCategoryRequest = (country?: string, category?: string, size?: string) => {
    return this.http.get(`${this.newsUrl}/top-headlines?country=${country || 'us'}&category=${category || 'general'}&pageSize=${size || '5'}`)
    // return of(sportsResponse)
  };
  getAstronomyRequest = () => {
   return this.http.get(this.astronomyApi)
    //  return of(astronomyResponse)
  };
  getForecastRequest = () => {
    return this.http.get(this.forcasetApi)
    //  return of(forecastResponse)
  };
  getQuoteRequest = () => {
    return this.http.get(this.quoteUrl, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };
  getDogFactsRequest = () => {
    return this.http.get('/dog-facts', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };

  private newsUrl = 'https://newsapi.org/v2';
  private weatherUrl = 'https://weatherapi-com.p.rapidapi.com';
  private astronomyApi = `${this.weatherUrl}/astronomy.json?q=Denver&dt=2025-01-24`;
  private forcasetApi = `${this.weatherUrl}/forecast.json?q=denver&days=1`;
  private quoteUrl = 'https://quotesondesign.com/wp-json/wp/v2/posts'
}
