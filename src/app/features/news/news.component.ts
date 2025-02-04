import { Component, inject,  OnInit, effect, signal } from '@angular/core';
import { environment } from '@/environments/environment';
import { ApiService } from '@/app/services/api.service';
import { newsResponse } from './mockNews';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.scss'
})
export class NewsComponent {
  apiService = inject(ApiService);
  data = signal<Response | null>(null)

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()) {
          this.apiService.getTopHeadlinesRequest().subscribe(res => this.data.set(res as Response))
        }
      } else {
        this.data.set(newsResponse as Response)
      }
    })
  }
}

interface Response {
  status: string;
  totalResults: number;
  articles: {
    source: {
      id: string;
      name: string;
    };
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
  }[];
}
