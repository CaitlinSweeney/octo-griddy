import { Component, OnInit, effect, inject, signal } from '@angular/core';
import { ApiService } from '@/app/services/api.service';
import { environment } from '@/environments/environment';

@Component({
  selector: 'app-todos',
  imports: [],
  templateUrl: './todos.component.html',
  styleUrl: './todos.component.scss'
})

export class TodosComponent {
  apiService = inject(ApiService);
  data = signal<Response | null>(null);

  constructor() {
    effect(() => {
      if (!environment.production) {
        if (!this.data()) {
          this.apiService.getTodos().subscribe(res => this.data.set((res as Response)))
        }
      } else {
        this.data.set({
          "userId": 1,
          "id": 1,
          "title": "delectus aut autem",
          "completed": false
        })
      }
    })
  }
}

type Response = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}
