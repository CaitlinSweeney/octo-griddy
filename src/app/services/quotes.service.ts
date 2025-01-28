import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root'})

export class QuotesService {
  http = inject(HttpClient);

  getQuoteRequest = () => {
    return this.http.get(this.url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
  };
  private url = 'https://quotesondesign.com/wp-json/wp/v2/posts'
}
