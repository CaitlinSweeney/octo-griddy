import { Component, inject, OnInit, signal } from '@angular/core';
import { QuotesService } from '../../services/quotes.service';
import DOMPurify from 'dompurify';

@Component({
  selector: 'app-quote',
  imports: [],
  templateUrl: './quote.component.html',
  styleUrl: './quote.component.scss'
})

export class QuoteComponent implements OnInit {
  quoteService = inject(QuotesService)
  data = signal<Response | null>(null)
  quote = signal<string>('')

  ngOnInit(): void {
      this.quoteService.getQuoteRequest().subscribe(res => {
        this.data.set((res as Response[])?.[0])
        this.quote.set(DOMPurify.sanitize((res as Response[])?.[1]?.content?.rendered));
      })
  }

}

export interface Response {
  id: number
  date: string
  date_gmt: string
  guid: Guid
  modified: string
  modified_gmt: string
  slug: string
  status: string
  type: string
  link: string
  title: { rendered: string }
  content: Content
  excerpt: Excerpt
  author: number
  featured_media: number
  comment_status: string
  ping_status: string
  sticky: boolean
  template: string
  format: string
  meta: Meta
}

export interface Guid {
  rendered: string
}

export interface Title {
  rendered: string
}

export interface Content {
  rendered: string
  protected: boolean
}

export interface Excerpt {
  rendered: string
  protected: boolean
}

export interface Meta {
  footnotes: string
}
