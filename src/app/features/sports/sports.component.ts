import { Component, inject,  OnInit, effect, signal } from '@angular/core';

import { ApiService } from '@/app/services/api.service';
import { environment } from '@/environments/environment';
import { sportsResponse } from './mockSports';

@Component({
  selector: 'app-sports',
  imports: [],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.scss'
})

export class SportsComponent {
  apiService = inject(ApiService);
  data = signal<Response | null>(null)

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()) {
          this.apiService.getCategoryRequest('us', 'sports', '2').subscribe(res => this.data.set(res as Response))
        }
      } else {
        this.data.set(sportsResponse as Response)
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
