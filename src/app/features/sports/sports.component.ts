import { Component, inject,  OnInit, signal } from '@angular/core';

import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-sports',
  imports: [],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})

export class SportsComponent implements OnInit {
  apiService = inject(ApiService);
  data = signal<Response | null>(null)

  ngOnInit(): void {
      this.apiService.getCategoryRequest('us', 'sports', '2').subscribe(res => this.data.set(res as Response))
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
