import { NgComponentOutlet } from '@angular/common';
import { Component, input, Type } from '@angular/core';

export interface Widget {
  id: number;
  title: string;
  component: Type<unknown>;
  data: {
    columns: number;
    index: number;
    rows: number;
  }
}

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [NgComponentOutlet],
  template: `
    <div class="card widget">
      <h3 class="bg-accent p-4 prose">{{ data().title }}</h3>
      <div class="card-body p-4">
        <ng-container [ngComponentOutlet]="data().component" />
      </div>
    </div>
  `,
  styles: [`
    .widget {
      @apply bg-secondary rounded shadow;
    }
  `]
})
export class WidgetComponent {
  data = input.required<Widget>();
}
