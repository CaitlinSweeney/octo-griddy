import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { sportsResponse } from '../utils/mockSports';
import { newsResponse } from '../utils/mockNews';

@Injectable()
export class NewsService {
  http = inject(HttpClient);

  getTopHeadlinesRequest = (country?: string, size?: string) => {
    // return this.http.get(`${this.url}/top-headlines?country=${country || 'us'}&pageSize=${size || '5'}`)
    return of(newsResponse)
  };
  getCategoryRequest = (country?: string, category?: string, size?: string) => {
    // return this.http.get(`${this.url}/top-headlines?country=${country || 'us'}&category=${category || 'general'}&pageSize=${size || '5'}`)
    return of(sportsResponse)
  };

  private url = 'https://newsapi.org/v2';
}
