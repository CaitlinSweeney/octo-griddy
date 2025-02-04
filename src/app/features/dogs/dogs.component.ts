import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ApiService } from '@/app/services/api.service';
import { environment } from '@/environments/environment';
import { mockData, defaultData, Response } from './form-values';

@Component({
  selector: 'app-dogs',
  imports: [],
  templateUrl: './dogs.component.html',
  styleUrl: './dogs.component.scss'
})
export class DogsComponent {
  apiService = inject(ApiService);
  data = signal<Response | null>(defaultData);

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()?.name) {
          this.apiService.getDogFactsRequest().subscribe(res => this.data.set((res as Response[])[0]))
        }
      } else {
        this.data.set(mockData)
      }
    })
  }
}
