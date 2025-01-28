import { Component, inject,  OnInit, signal } from '@angular/core';

import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-news',
  imports: [],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  newsService = inject(NewsService);
  data = signal<Response | null>(null)

  ngOnInit(): void {
      this.newsService.getTopHeadlinesRequest().subscribe(res => this.data.set(res as Response))
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
