import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  http = inject(HttpClient);

  getTopHeadlinesRequest = (country?: string, size?: string) => {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country || 'us'}&pageSize=${size || '5'}`)
  };
  getCategoryRequest = (country?: string, category?: string, size?: string) => {
    return this.http.get(`https://newsapi.org/v2/top-headlines?country=${country || 'us'}&category=${category || 'general'}&pageSize=${size || '5'}`)
  };
  getAstronomyRequest = () => {
   return this.http.get(this.astronomyApi)
  };
  getForecastRequest = () => {
    return this.http.get(this.forcasetApi)
  };
  getQuoteRequest = () => {
    return this.http.get(`/api-ninjas/quotes`)
  };
  getDogFactsRequest = () => {
     return this.http.get('/api-ninjas/dogs')
  };

  private weatherUrl = 'https://weatherapi-com.p.rapidapi.com';
  private astronomyApi = `${this.weatherUrl}/astronomy.json?q=Denver&dt=2025-01-24`;
  private forcasetApi = `${this.weatherUrl}/forecast.json?q=denver&days=1`;
}
