import { Component, inject, OnInit, effect, signal } from '@angular/core';
import { ApiService } from '@/app/services/api.service';
import { environment } from '@/environments/environment';

const mockQuote = {
  quote: "The will of man is his happiness.",
  author: "Friedrich Schiller",
  category: "happiness"
}

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})

export class QuoteComponent {
  apiService = inject(ApiService)
  data = signal<Response | null>(null)

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()) {
          this.apiService.getQuoteRequest().subscribe(res => {
            this.data.set((res as Response[])?.[0])
          })
        }
      } else {
        this.data.set(mockQuote)
      }
    })
  }
}

export interface Response {
  category: string;
  author: string;
  quote: string;
}
